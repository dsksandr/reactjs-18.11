import './Messenger.scss';

import React, { Component } from 'react';

import { MessagesList } from 'components/MessagesList';
import { MessageForm } from 'components/MessageForm';
import { ChatList } from 'components/ChatList'

export class Messenger extends Component {
  // componentDidUpdate() {
  //   let { chatId } = this.props;

  //   if (this.props.chats[chatId].messages.length) {
  //     const { author } = this.props.chats[chatId].messages[this.props.chats[chatId].messages.length - 1];
    
  //     if (author !== 'Bot') {
  //       let message = {
  //         author: 'Bot',
  //         text: `Привет, ${author}! Бот на связи!`
  //       }
  //       setTimeout(() => {
  //         this.handleMessageSend(message);
  //       }, 1000);
  //     }
  //   }
  // }

  // handleMessageSend = (message) => {
  //   let { chatId } = this.props;
  //   let { chats } = this.props;

  //   if (message.text) {
  //     chats[chatId].messages = chats[chatId].messages.concat([message])
  //     this.setState(({ chats }) => ({ chats: chats }));
  //   }
  // }

  render() {
    const { messages, chats, sendMessage, chatId } = this.props;

    return (
      <div className="container">
        <ChatList chats={chats} />
        <div className="messanger">
          {chatId ? <MessagesList items={messages} /> : 'Выберите чат'}
          {chatId && <MessageForm onSend={sendMessage} />}
        </div>            
      </div>
    )
  }
}