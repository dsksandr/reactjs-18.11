import React, {Component} from 'react';

import {Messenger} from "components/Messenger";
import {Header} from 'components/Header';
import {ChatList} from 'components/ChatList';

import './Layout.scss';

export class Layout extends Component{
  render() {
    return (
      <div>
        <Header/>
        <div className='layout'>
          <ChatList chats={this.props.chats} addChat={this.props.addChat}/>
          <Messenger messages={this.props.messages} sendMessage={this.props.sendMessage}/>
        </div>
      </div>
    );
  }
}