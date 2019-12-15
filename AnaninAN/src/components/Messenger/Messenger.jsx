import './Messenger.scss';

import React, { PureComponent } from 'react';

import { MessagesList } from 'components/MessagesList';
import { MessageForm } from 'components/MessageForm';

export class Messenger extends PureComponent {
  render() {
    const { messages, sendMessage } = this.props;

    return (
      <div className="messenger">
        { messages ? <MessagesList items={messages} /> : 'Выберите чат!' }
        { messages && <MessageForm onSend={sendMessage} /> }
      </div>
    );
  }
}