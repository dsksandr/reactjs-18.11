import './MessagesList.scss';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Message, messageType } from 'components/Message';

export class MessagesList extends PureComponent {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape(messageType),
    ),
  };

  render() {
    const { items } = this.props;

    return (
      <div className="messages-list">
        {items.map((item, idx) => <Message key={idx} {...item} />)}
      </div>
    );
  }
}