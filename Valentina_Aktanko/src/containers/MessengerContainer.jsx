import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { Messenger } from 'components/Messenger';
import { load, send } from 'actions/chats';

class MessengerContainer extends PureComponent {
    componentDidMount() {
        const { loadChats } = this.props;

        loadChats();
    }

    handleMessageSend = (message) => {
        const { sendMessage, chatId } = this.props;

        sendMessage({
            ...message,
            chatId,
        });
    }

    render() {
        const { chats, messages, sendMessage } = this.props;
        return (
            <Messenger sendMessage={this.handleMessageSend} messages={messages} chats={chats}/>
        )
    }
}

function mapStateToProps(state, ownProps) {
    const chats = state.chats.get('entries');

    let messages = null;

    const currentId = state.router.location.pathname.replace(/\D/ig, '');

    if (currentId && chats.has(currentId)) {
        messages = chats.getIn([currentId, 'messages']).toJS();
    }
    
    return {
        chats: chats.map((entry) => ({name: entry.get('name'), link: `/chats/${entry.get('id')}`})).toList().toJS(),
        messages,
        chatId: currentId,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadChats: () => dispatch(load()),
        sendMessage: (message) => dispatch(send(message)),
    }
}

export const MessengerRedux = connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);