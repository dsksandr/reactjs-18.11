import './style.scss';

import React, { Component } from 'react';

import { ChatListRedux } from 'containers/ChatListContainer'

import { Header }       from 'components/Header';
import { ListMessages } from 'components/ListMessage';
import { FormMessage }  from 'components/FormMessage';
import { createTitle }  from 'services/createTitle';

export class App extends Component {

  componentDidMount() {
    const { chatName } = this.props;
    createTitle({ chatName });
  }

  componentDidUpdate() {
    const { chatName } = this.props;
    createTitle({ chatName });
  }

  render() {
    const { messages, sendMessage } = this.props;

    return (
      <div className="container">
        <Header />
        <ChatListRedux />
        <section id="messenger">
          {
            messages
              ? (
                <React.Fragment>
                  <ListMessages listMessage={messages} />
                  <FormMessage onSend={sendMessage} />
                </React.Fragment>
              )
              : <ListMessages listMessage={[{ author: '', text: 'Вам необходимо выбрать чат, чтобы продолжить.' }]} />
          }
        </section>
      </div>
    );
  }
}
