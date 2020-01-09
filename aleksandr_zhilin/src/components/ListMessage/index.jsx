import './style.scss';

import React, { Component } from 'react';
import PropTypes            from 'prop-types';

import {
  ItemMessage,
  messageType
} from 'components/ItemMessage';

export class ListMessages extends Component {
  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    const list = document.getElementsByClassName('list-messages');
    if (list.length > 0) {
      list[0].scrollTop = list[0].scrollHeight;
    }
  };

  render() {

    const { listMessage } = this.props;

    return (
      <ul className="list-messages">
        {
          listMessage.length > 0
            ? listMessage.map((message, indx) => <ItemMessage key={indx} {...message} />)
            : <ItemMessage author={''}
                           text={'Сейчас здесь нет сообщений, Ваше будет первым!'} />
        }
      </ul>
    )
  }
}

ListMessages.propTypes = {
  listMessage: PropTypes.arrayOf(
    PropTypes.shape(messageType)
  ).isRequired,
};

ListMessages.defaultProps = {
  listMessage: [],
};