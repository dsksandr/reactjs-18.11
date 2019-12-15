import React, {Component} from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from 'react-router-dom';

import './ChatList.scss';

export class ChatList extends Component {
  render() {
    const {chats, addChat} = this.props;

    return (
      <div className='chat-list'>
        <List component="nav" aria-label="main mailbox folders">

          {chats.map((chat, idx)=>
            <Link key={idx} to={chat.link}>
              <ListItem button>
                <ListItemText primary={chat.name} />
              </ListItem>
            </Link>
          )}

          <ListItem onClick={addChat} button>
            <ListItemText primary="+ Добавить чат" />
          </ListItem>

        </List>
      </div>
    );
  }
}