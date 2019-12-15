const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const port = process.env.PORT || config.port;
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

const db = require("monk")(config.mongoURI);
const chats = db.get("chats");
const profile = db.get("profile");

app.get('/chats', (req, res) => {
  chats.find({}, (err, docs) => {
    if(err) {
      return res.status(500).json({message: 'Unexpected error'});
    }
    res.json(docs);
  });
});

app.delete('/chats/:id', (req, res) => {
  chats.remove({ _id: req.params.id }, (err) => {
    if(err) {
      return res.status(500).json({message: 'Unexpected error'});
    }

    res.json({ message: 'success' });
  })
});

app.get('/profile', (req, res) => {
  profile.findOne({}, (err, doc) => {
    if(err) {
      return res.status(500).json({message: 'Unexpected error'});
    }
    res.json(doc);
  });
});

app.post('/profile', (req, res) => {
  profile.findOne({}, (err, doc) => {
    if(err) {
      return res.status(500).json({message: 'Unexpected error'});
    }

    if (doc) {
      profile.update({}, req.body, {}, (err, numReplaced) => {
        if (err || numReplaced <=0) {
          return res.status(500).json({message: 'Unexpected error'});
        }

        return res.json({ message: 'success' });
      });
    } else {
      profile.insert(req.body, (err, newDoc) => {
        if (err) {
          return res.status(500).json({message: 'Unexpected error'});
        }

        res.json({ message: 'success' });
      });
    }
  });
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('new chat', (body) => {
    chats.insert({...body, messages: [{
      author: 'Bot', text: `Вы создали новый чат: ${body.name}`
    }]}, (err, newDoc) => {
      socket.broadcast.emit('new chat', newDoc);
      socket.emit('new chat', newDoc);
    });
  });

  socket.on('chat message', (body) => {
    const { chatId, ...message } = body;
    chats.update({ _id: chatId }, { $push: { messages: message } }, {}, () => {
      socket.broadcast.emit('chat message', body);
      socket.emit('chat message', body);

      setTimeout(() => {
        const botMessage = { author: 'Bot', text: `Привет, ${body.author}! Бот на связи!` };
        chats.update({ _id: chatId }, { $push: { messages: botMessage } }, {}, () => {
          socket.broadcast.emit('chat message', botMessage);
          socket.emit('chat message', botMessage);
        });
      }, 5000);
    });
  });
});

http.listen(port, () => {
  console.log(`Server has been started on port ${config.port}`);
});