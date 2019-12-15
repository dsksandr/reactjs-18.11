import './ChatList.scss';

import React, { PureComponent } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

export class ChatList extends PureComponent {
  render() {
    const { chats } = this.props;

    return (
      <div className="chat-list">
        <List>
          {chats.map((chat, idx) =>
            <ListItem key={idx}>
              <Link to={chat.link}>
                <ListItemText primary={chat.name}></ListItemText>
              </Link>
            </ListItem>
          )}
        </List>
      </div>
    );
  }
}