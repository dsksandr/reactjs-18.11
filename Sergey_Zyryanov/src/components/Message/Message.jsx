import './Message.scss';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class Message extends Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  };

  render() {
    const {author} = this.props;
    const classes = classNames('message', {
      'message-owner': author !== 'Bot',
      'message-companion': author === 'Bot',
    });

    return (
      <div className={classes}>
        <div>{ this.props.text }</div>
        <div className='message-sender'>{ this.props.author }</div>
      </div>
    );
  }
}