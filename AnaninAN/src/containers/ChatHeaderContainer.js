import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { ChatHeader } from 'components/ChatHeader';
import { listen, createChat } from 'actions/chats';

class ChatHeaderContainer extends PureComponent {
  handleChatAdd = () => {
    const { createChat, redirect } = this.props;
    const chatName = prompt('Введите имя чата');

    createChat({ name: chatName });
  }

  render() {
    const { name } = this.props;
    return (
      <ChatHeader name={name} addChat={this.handleChatAdd } />
    );
  }
}

function mapStateToProps(state, ownProps) {
  const chats = state.chats.get('entries');

  const { match } = ownProps;

  return {
    name: chats.getIn([match.params.id, 'name']),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createChat,
    listenChat: () => dispatch(listen()),
  }
}

export const ChatHeaderRedux = connect(mapStateToProps, mapDispatchToProps)(ChatHeaderContainer);