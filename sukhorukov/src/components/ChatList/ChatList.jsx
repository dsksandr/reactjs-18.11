import React, { PureComponent } from 'react';
import moment from 'moment';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core'
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Remove';

moment.locale('ru');

export class ChatList extends PureComponent {
  handleChatRemove = (chatId) => () => {
    const { removeChat } = this.props;

    removeChat(chatId);
  }

  render(){
    const { chats, addChat } = this.props;
    return(
      <div>
        <List component="nav">
          {chats.map((chat, idx) =>
            <ListItem button key={idx}>
            <Link to={chat.link}>
              <ListItemText primary={`[${moment(chat.timestamp).format('LLL')}] ${chat.name}`} />
            </Link>
            <Fab variant="round" color="primary" onClick={this.handleChatRemove(chat._id)}><DeleteIcon /></Fab>
          </ListItem>
          )}
            <Button onClick={addChat}>
              <ListItemText primary="Добавить чат" />
            </Button>
        </List>
      </div>
    );
  }
}