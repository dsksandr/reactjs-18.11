import './style.scss';

import React, { Component } from 'react';

import { Header }       from 'components/Header';
import { ChatList }     from 'components/ChatList';
import { ListMessages } from "../ListMessage";
import { FormMessage }  from "../FormMessage";

export class App extends Component {

  // interval = null;
  //
  // componentDidUpdate() {
  //
  //   if (this.messageList.length) {
  //
  //     const { author } = this.messageList[this.messageList.length - 1];
  //     if (author !== 'Bot') {
  //       setTimeout(() => {
  //         this.handleMessageSend({
  //           author: 'Bot',
  //           text: `Привет, ${author}! Бот на связи! Я не понимаю вас!`,
  //         });
  //       }, 1000);
  //     }
  //   }
  // }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }
  //

  /**
   * @returns []
   */
  // get messageList() {
  //   const { chats, match } = this.props;
  //
  //   let messageList = null;
  //
  //   if (match && chats[match.params.id]) {
  //     messageList = chats[match.params.id].messages;
  //   }
  //   return messageList
  // }

  render() {
    const { chats, messages, sendMessage, id, addChat } = this.props;

    // console.log(messages);
    return (
      <div className="container">
        <Header/>
        <ChatList chats={chats} addChat={addChat}/>
        <section id="messenger">
          {
            messages
              ? (
                <React.Fragment>
                  <ListMessages listMessage={messages}/>
                  <FormMessage onSend={sendMessage} id={id}/>
                </React.Fragment>
              )
              : <ListMessages listMessage={[{ author: '', text: 'Вам необходимо выбрать чат, чтобы продолжить.' }]}/>
          }
        </section>
      </div>
    );
  }
}
