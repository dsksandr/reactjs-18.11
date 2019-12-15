import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import {Layout} from "components/Layout";
import {load, send, add} from 'actions/chats';
import {push} from 'connected-react-router';

class MessengerContainer extends PureComponent {
  componentDidMount() {
    const {loadChats} = this.props;
    loadChats();
  };

  handleMessageSend = (message) => {
   const {sendMessage, chatId} = this.props;

   sendMessage({
     ...message,
     chatId
   });
  };

  handleChatAdd = () => {
    const {addChat, newChatId, redirect} = this.props;
    const chatName = prompt('Введите название чата');

    addChat({name: chatName, chatId: newChatId});
    redirect(newChatId);
  };

  render() {
    const {chats, messages} = this.props;

    return (
      <Layout chats={chats} messages={messages} sendMessage={this.handleMessageSend} addChat={this.handleChatAdd}/>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const chats = state.chats.get('entries');
  const lastId = state.chats.get('entries').size ? state.chats.get('entries').last().get('id') : 0;
  const newChatId = +lastId + 1;
  const {match} = ownProps;

  let messages = null;
  // const currentId = state.router.location.pathname.replace(/\D/ig, '');

  if (match && chats.has(match.params.id)) {
    messages = chats.getIn([match.params.id, 'messages']).toJS();
  }

  return {
    chats: chats.map((entry)=>({name: entry.get('name'), link: `/chat/${entry.get('id')}`})).toList().toJS(),
    messages,
    chatId: match ? match.params.id : null,
    newChatId,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadChats: () => dispatch(load()),
    sendMessage: (message) => dispatch(send(message)),
    addChat: (chat) => dispatch(add(chat)),
    redirect: (id) => dispatch(push(`/chat/${id}`)),
  };
}

export const MessengerRedux = connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);