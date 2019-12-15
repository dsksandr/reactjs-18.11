import './Messenger.scss';

import React, { Component, PureComponent } from 'react';

import { MessagesList } from 'components/MessagesList';
import { MessageForm } from 'components/MessageForm';

export class Messenger extends PureComponent {
    render() {
        const { chats, messages, sendMessage } = this.props;

        return (
            <div className="messenger">
                {messages ? <MessagesList items={messages} /> : 'Пожалуйста, выберите чат, чтобы продолжить общение'}
                {messages && <MessageForm onSend={sendMessage} />}
            </div>
        );
    }
}