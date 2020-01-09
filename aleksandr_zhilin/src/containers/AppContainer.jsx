import React, { PureComponent } from 'react';
import { connect }              from 'react-redux';

import { App } from 'components/App';
import {
  sendMessage,
  listen,
}              from 'actions/chats';


class AppContainer extends PureComponent {
  componentDidMount() {
    const { listen } = this.props;
    listen();
  }

  handleMessageSend = (message) => {
    const { sendMessage, chatId } = this.props;
    console.log({
      chatId,
      ...message
    });
    sendMessage({
      chatId,
      ...message
    });
  };

  render() {
    const { messages, chatName } = this.props;

    return <App messages={messages}
                chatName={chatName}
                sendMessage={this.handleMessageSend} />;
  }
}

function mapStateToProps(state, ownProps) {
  const chats = state.chats.get('entries');

  const { match } = ownProps;

  let messages, chatName = null;

  if (match && chats.has(match.params.id)) {
    messages = chats.getIn([match.params.id, 'messages']).toJS();
    chatName = chats.getIn([match.params.id, 'name']);
  }

  return {
    messages,
    chatName,
    chatId: match ? match.params.id : null,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sendMessage,
    listen: () => dispatch(listen()),
  }
}

export const AppRedux = connect(mapStateToProps, mapDispatchToProps)(AppContainer);