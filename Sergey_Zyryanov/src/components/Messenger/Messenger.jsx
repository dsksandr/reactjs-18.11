import 'assets/global.scss';
import './Messenger.css';

import React, {Component} from 'react';

import {MessageForm} from 'components/MessageForm';


export class Messenger extends Component {



  // componentDidUpdate() {
  //
  // if (this.messages.length){
  //   const { author } = this.messages[this.messages.length - 1];
  //   if (author !== 'Bot') {
  //     setTimeout(() => {
  //       this.handleMessageSend({ author: 'Bot', text: `Привет ${author}! Бот на связи!`});
  //     }, 1000);
  //   }
  // }
  // }




  render() {
    const {messages, sendMessage} = this.props;

    return (
      <div className='messenger'>
        {
          messages ?
            <MessageForm messages={messages} onSend={sendMessage}/>
            : 'Пожалуйста выберете чат'
        }
      </div>
    );

  }
}