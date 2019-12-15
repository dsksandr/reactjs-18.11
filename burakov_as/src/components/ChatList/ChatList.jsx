import './ChatList.css';

import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Button } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/remove';
import moment from 'moment';

moment.locale('ru');

export class ChatList extends Component{
handleChatRemove = (chatId) => () => {
  const { removeChat } = this.props;

  removeChat(chatId);
}

  render() {
    const {chats, addChat } = this.props;

    return (
          <List className="chat-list">
            {chats.map((chat, idx) => <ListItem button key={idx}>
                <Link className="no-decor" to={chat.link}>
                  <ListItemText primary={`[${moment(chat.timestamp).format('LLL')}]${chat.name} `} />   
                  <Fab variant="round" color="primary" onClick={this.handleChatRemove(chat._id)}><DeleteIcon /></Fab>
                </Link>
                <Divider variant="inset" component="li" />
            </ListItem>)
            }
            <Button onClick={addChat}>
              <ListItemText primary="+ Добавить чат" />     
            </Button>
          </List>   
    )
  }
}