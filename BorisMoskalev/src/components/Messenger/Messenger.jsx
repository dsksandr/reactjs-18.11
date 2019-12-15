import './Messenger.css';

import React, {Component} from 'react';

import {MessagesList} from 'components/MessagesList';
import {MessageForm} from 'components/MessageForm';
import {ChatList} from 'components/ChatList'

export class Messenger extends Component {
    state = {
        chats: {
            '1': {messages: []},
            '2': {messages: []},
            '3': {messages: []},
            '4': {messages: []}
        },
    };

    messages() {
        let { chat } = this.props;
        let { chats } = this.state;

        let messages = [];
        if (chat && chats[chat]) {
            messages = chats[chat].messages;
        }
        return messages;
    }
    interval = null;

    componentDidUpdate() {
        let {chat} = this.props;
        if (this.state.chats[chat].messages.length) {
            const {author} = this.state.chats[chat].messages[this.state.chats[chat].messages.length - 1];
            console.log(author);
            if (author !== 'Bot') {
                let message = {
                    author: 'Bot',
                    text: 'Привет ' + author + '! Бот на связи! Повторите я вас не расслышал!'
                }
                setTimeout(() => {
                    this.handleMessageSend(message);
                }, 1000);
            }
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    handleMessageSend = (message) => {
        let {chat} = this.props;
        let {chats} = this.state;

        chats[chat].messages = chats[chat].messages.concat([message]);
        this.setState(({chats}) => ({chats: chats}));
    };

    render() {
        return (
            <div className="container">
                <div className="chatlist">
                    <ChatList/>
                </div>
                <div className="messenger">
                    {this.props.chat ? <MessagesList items={this.messages()}/> : 'Чат еще не выбран'}
                    {this.props.chat && <MessageForm onSend={this.handleMessageSend}/>}
                </div>
            </div>

        )
    }
}