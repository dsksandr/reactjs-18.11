import React, { PureComponent } from 'react';
import { connect }              from 'react-redux';
import { push }                 from 'connected-react-router'

import { App }             from 'components/App';
import { load, send, add } from 'actions/chats';


class AppContainer extends PureComponent {
  componentDidMount() {
    const { loadChats } = this.props;

    loadChats();
  }

  handleChatAdd = () => {
    const { addChat, newChatId, redirect } = this.props;
    const chatName = prompt('Введите имя чата');


    // console.log({ name: chatName, id: newChatId });

    addChat({ name: chatName, id: newChatId });

    redirect(newChatId)
  };

  render() {
    const { chats, messages, sendMessage, id } = this.props;

    console.log(chats, 'chats');
    return <App chats={chats}
                addChat={this.handleChatAdd}
                messages={messages}
                sendMessage={sendMessage}
                id={id} />;
  }
}

function mapStateToProps(state, ownProps) {
  const chats = state.chats.get('entries');
  const lastId = state.chats.get('entries').size
    ? state.chats.get('entries').last().get('id')
    : 0;
  const newChatId = +lastId + 1;

  const { match } = ownProps;

  let messages = null;

  // console.log(match.params.id);
  // console.log(chats.has(match.params.id));
  //
  // console.log(chats.toJS(), 'chats');

  if (match && chats.has(match.params.id)) {
    messages = chats.getIn([match.params.id, 'messages']).toJS();
  }

  return {
    chats: chats.map((entry) => ({
      name: entry.get('name'),
      link: `/chat/${entry.get('id')}/`,
      read: entry.get('read'),
    })).toList().toJS(),
    messages,
    id: match ? match.params.id : null,
    newChatId,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadChats: () => dispatch(load()),
    sendMessage: (message) => dispatch(send(message)),
    addChat: (chat) => dispatch(add(chat)),
    redirect: (id) => dispatch(push(`/chat/${id}/`)),
  }
}

export const AppRedux = connect(mapStateToProps, mapDispatchToProps)(AppContainer);