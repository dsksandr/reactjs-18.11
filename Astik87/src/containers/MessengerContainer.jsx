import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { load, send } from '../actions/chats';
import { Messenger } from 'components/Messenger';

class MessengerContainer extends PureComponent {
    componentDidMount() {
        const {loadChats} = this.props;

        loadChats();
    }

    handleMessageSend = (message) => {
        const { chatId,sendMessage } = this.props;

        sendMessage({
            ...message,
            chatId
        });
    }

    render() {
        const { chats, messages, chatId } = this.props;
        return <Messenger sendMessage={this.handleMessageSend} messages={messages} chatId={chatId} chats={chats} />;
    }
}

function mapStateToProps(state, ownProps) {
    const { chatId, sendMessage } = ownProps;
    const chats = state.chats.get('entries');

    let messages = [];
    if (chatId && chats.get(chatId)) {
      messages = chats.get(chatId).get('messages');
    }

    return {
        ...ownProps,
        chats: chats.map((entry) => ({name: entry.get('name'), id: entry.get('id')})),
        messages,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadChats: () => dispatch(load()),
        sendMessage: (message) => dispatch(send(message)),
    };
}

export const MessengerRedux = connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);