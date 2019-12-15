import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { Messenger } from 'components/Messenger';
import { sendMessage, listen, createChat, removeChat } from 'actions/chats';

class MessengerContainer extends PureComponent {
  componentDidMount() {
    const { listenChats } = this.props;

    listenChats();
  }

  handleMessageSend = (message) => {
    const { sendMessage, chatId } = this.props;

    sendMessage({
      ...message,
      chatId
    });
  }

  handleChatAdd = () => {
    const { createChat, redirect } = this.props;
    const chatName = prompt('Введите имя чата');

    createChat({ name: chatName });
  }

  render() {
    const { chats, messages, removeChat } = this.props;
    
    return (
      <Messenger removeChat={removeChat} addChat={this.handleChatAdd} sendMessage={this.handleMessageSend} messages={messages} chats={chats} />
    )
  }
}

function mapStateToProps(state, ownProps) {
  const chats = state.chats.get('entries');

  const { match } = ownProps;

  let messages = null;

  if (match && chats.has(match.params.id)) {
    messages = chats.getIn([match.params.id, 'messages']).toJS();
  }

  return {
    chats: chats.sortBy((entry) => -entry.get('timestamp')).map((entry) => ({ name: entry.get('name'), link: `/chats/${entry.get('_id')}`, _id: entry.get('_id'), timestamp: entry.get('timestamp') })).toList().toJS(),
    messages,
    chatId: match ? match.params.id : null,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sendMessage,
    createChat,
    listenChats: () => dispatch(listen()),
    removeChat: (chatId) => dispatch(removeChat(chatId)),
  }
}

export const MessengerRedux = connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);
