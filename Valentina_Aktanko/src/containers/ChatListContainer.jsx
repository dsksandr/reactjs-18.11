import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { ChatList } from 'components/ChatList';
import { add } from 'actions/chats';
import { push } from 'connected-react-router';

class ChatListContainer extends PureComponent {
    handleChatAdd = () => {
        const { addChat, newChatId, redirect } = this.props;
        const chatName = prompt('Введите имя чата');

        addChat({ name: chatName, chatId: newChatId });
        redirect(newChatId);
    }

    render() {
        const { chats } = this.props;

        return (
            <ChatList addChat={this.handleChatAdd} chats={chats}/>
        );
    }
}

function mapStateToProps(state, props) {
    const chats = state.chats.get('entries').map((chat) => ({
        name: chat.get('name'), 
        id: chat.get('id'), 
        avatar: chat.get('avatarSrc'),
    })).toList().toJS();

    const lastId = state.chats.get('entries').size ? state.chats.get('entries').last().get('id') : 0;
    const newChatId = +lastId + 1;

    return {chats, newChatId}
}

function mapDispatchToProps(dispatch) {
    return {
        addChat: (chat) => dispatch(add(chat)),
        redirect: (id) => dispatch(push(`/chats/${id}`)),
    }
}

export const ChatListRedux = connect(mapStateToProps, mapDispatchToProps)(ChatListContainer);