import './Messenger.css';

import React, { Fragment, PureComponent } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

import { MessagesList } from 'components/MessagesList';
import { MessageForm } from 'components/MessageForm';
import { HeaderRedux } from 'containers/HeaderContainer';
import { Button } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Remove';
import moment from 'moment';

moment.locale('ru');

export class Messenger extends PureComponent {
  handleChatRemove = (chatId) => () => {
    const { removeChat } = this.props;

    removeChat(chatId);
  }

  render() {
    const { chats, messages, sendMessage, addChat } = this.props;

    return (
      <Fragment>
        <HeaderRedux />
        <div className="messanger">
          <List>
            {chats.map((chat, idx) => <ListItem key={idx}>
              <Link to={chat.link}>
                <ListItemText primary={`[${moment(chat.timestamp).format('LLL')}] ${chat.name}`}></ListItemText>
                <Fab variant="round" color="primary" onClick={this.handleChatRemove(chat._id)}><DeleteIcon /></Fab>
              </Link>
            </ListItem>)}
            <Button onClick={addChat}>
              <ListItemText primary="+ Добавить чат"></ListItemText>
            </Button>
          </List>
          {messages ? <MessagesList items={messages} /> : 'Пожалуйста, выберите чат, чтобы продолжить общение'}
          {messages && <MessageForm onSend={sendMessage} />}
        </div>
      </Fragment>
    );
  }
}