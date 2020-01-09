import React, { PureComponent } from 'react';
import { connect }              from 'react-redux';

import { ChatList } from 'components/ChatList';
import {
  createChat,
  removeChat
}                   from 'actions/chats';


class ChatListContainer extends PureComponent {

  handleChatAdd = () => {
    const { createChat } = this.props;
    const chatName = prompt('Введите имя чата');

    createChat({ name: chatName });
  };

  handleChatRemove = (chatId) => () => {
    const { removeChat } = this.props;

    removeChat(chatId);
  };

  render() {
    const { chats } = this.props;

    return <ChatList chats={chats}
                     addChat={this.handleChatAdd}
                     removeChat={this.handleChatRemove} />;
  }
}

function mapStateToProps(state) {
  const chats = state.chats.get('entries');

  return {
    chats: chats.map((entry) => ({
      name: entry.get('name'),
      link: `/chat/${entry.get('_id')}/`,
      _id: entry.get('_id'),
      timestamp: entry.get('timestamp'),
      read: entry.get('read'),
    })).toList().toJS(),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createChat,
    removeChat: (chatId) => dispatch(removeChat(chatId)),
  }
}

export const ChatListRedux = connect(mapStateToProps, mapDispatchToProps)(ChatListContainer);