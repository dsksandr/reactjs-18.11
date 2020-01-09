import './style.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { TextField, Button } from '@material-ui/core';

export class FormMessage extends Component {
  state = {
    author: 'User',
    text: '',
  };

  static propTypes = {
    onSend: PropTypes.func,
  };

  selectText = (event) => {
    event.target.select()
  };

  handleMessageSend = (event) => {
    event.preventDefault();

    const { onSend } = this.props;
    if (typeof onSend === 'function') {
      onSend(this.state);

      this.setState({ text: '' });
    }
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleEnterDown = (event) => {
    if (event.ctrlKey && event.keyCode === 13) {
      this.handleMessageSend(event);
    }
  };

  render() {
    const { author, text } = this.state;

    return (
      <form className="form-message"
            noValidate
            autoComplete="off"
      >
        <TextField label="Имя"
                   name="author"
                   value={author}
                   onChange={this.handleInputChange}
        />
        <TextField label="Текст сообщения"
                   multiline
                   rows="2"
                   name="text"
                   value={text}
                   onChange={this.handleInputChange}
                   onKeyDown={this.handleEnterDown}
        />
        <Button variant="contained"
                color="primary"
                onClick={this.handleMessageSend}
        >
          Отправить
        </Button>
      </form>
    );
  }
}
