import './MessagesList.css';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Message} from "components/Message";

export class MessagesList extends Component {

  static propTypes = {
    messages: PropTypes.array.isRequired,
  };


  render() {
    const message = this.props.messages.map((message, idx) => <Message key={idx} author={message.author} text={ message.text }/>);
    return (
       <div className='messages-list'>
         {message}
       </div>
    );
  }
}