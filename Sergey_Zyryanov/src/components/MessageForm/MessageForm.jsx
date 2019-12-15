import './messageForm.css';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import SendIcon from '@material-ui/icons/Send';

import {MessagesList} from "components/MessagesList";

export class MessageForm extends Component {
  state = {
    text: '',
    author: '',
  };


  static propTypes = {
    onSend: PropTypes.func,
  };

  handleMessageSend = () => {
    const { onSend } = this.props;

    if (typeof onSend === 'function') {
      onSend(this.state);

      this.setState({ text: '' });
    }
  };

  handleInputChange = (event) => {
    const fieldName = event.target.name;

    this.setState({
      [fieldName]: event.target.value,
    });
  };

  handleEnterDown = (event) => {
    if (event.ctrlKey && event.keyCode === 13) {
      this.handleMessageSend();
    }
  };

  render() {
    const { author, text } = this.state;

    return (
      <div className='message-form'>
        <MessagesList messages={this.props.messages} />

        <TextField id="outlined-basic" variant="outlined" label="author" name="author" onChange={this.handleInputChange} value={author} />
        <TextField multiline id="outlined-basic" variant="outlined" label="text" name="text" onKeyDown={this.handleEnterDown} onChange={this.handleInputChange} value={text}></TextField>
        <Fab variant="round" color="primary" onClick={this.handleMessageSend}><SendIcon /></Fab>

      </div>
    );
  }
}