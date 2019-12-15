import './ChatList.scss';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export class ChatList extends Component {
  render() {
    const { chats } = this.props;
    return (
      <div className="chat-list">
          <List component="nav" aria-label="contacts">
              {chats.map((item, idx) =><Link to={`/chats/${item.id}`} key={idx}><ListItem button><ListItemText inset primary={item.name} /></ListItem></Link>
              )}
          </List>
      </div>
    );
  }
}