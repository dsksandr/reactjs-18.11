import './MessageForm.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

export class MessageForm extends Component {
    state = {
        author: '',
        text: '',
    }

    static propTypes = {
        onSend: PropTypes.func,
    }

    handleMessageSend = () => {
        const { onSend } = this.props;

        if (typeof onSend === 'function') {
            onSend(this.state);

            this.setState( { text: '' });
        }
    }

    handleInputChange = (event) => {
        const fieldName = event.target.name;

        this.setState({
            [fieldName]: event.target.value,
        });
    }

    handleEnterDown = (event) => {
        if(event.ctrlKey && event.keyCode === 13) {
            this.handleMessageSend();
        }
    }

    render() {
        const { author, text } = this.state;
        return (
            <div className="message-form">
                <TextField label="Author" name="author" placeholder="author" onChange={this.handleInputChange} value={author} className="messageForm__author"/>
                <TextField label="Text" name="text" onKeyDown={this.handleEnterDown} onChange={this.handleInputChange} value={text} className="messageForm__text"/>
                <Fab variant="round" color="primary" onClick={this.handleMessageSend} className="messageForm__btn"><SendIcon /></Fab>
            </div>
        )
    }
}