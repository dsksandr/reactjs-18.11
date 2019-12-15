import './Message.scss';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const messageType = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export class Message extends PureComponent {
  static propTypes = messageType;

  render() {
    const { author, text } = this.props;

    const classes = classNames('message', {
      'message__owner': author !== 'Bot',
      'message__companion': author === 'Bot',
    });

    return (
      <div className={classes}>
        <div>{text}</div>
        <div className="message__sender">{author}</div>
      </div>
    );
  }
}