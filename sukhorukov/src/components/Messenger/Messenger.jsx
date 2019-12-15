import './Messenger.css';

import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

import { MessagesList } from 'components/MessagesList';
import { MessageForm } from 'components/MessageForm';
import { ChatList } from 'components/ChatList';

export class Messenger extends Component {
  render() {
    const { chats, messages, sendMessage, addChat, removeChat } = this.props;
    return(
      <div className="messenger">
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <ChatList chats={chats} addChat={addChat} removeChat={removeChat} />
          </Grid>
          <Grid item xs={8}>
            {messages ? <MessagesList items={messages} /> : 'Пожалуйста выберите чат'}
            {messages && <MessageForm onSend={sendMessage} />}
          </Grid>
        </Grid>   
      </div>
    )
  }
}