
import './messagesField.css'

import React from 'react';

import { MessagesList } from 'components/MessagesList/MessagesList';
import { MessageForm } from 'components/MessageForm/MessageForm';

export class MessageField extends React.Component {
    
    state ={
        chats:{
            1:[{author:'bot',text:'Привет я бот Валера'},{author:'bot',text:'Это чат номер 1.'},{author:'bot',text:'Задавай вопрос?'},],
            2:[{author:'bot',text:'Привет я бот Валера'},{author:'bot',text:'Это чат номер 2.'},{author:'bot',text:'Задавай вопрос?'},],
            3:[{author:'bot',text:'Привет я бот Валера'},{author:'bot',text:'Это чат номер 3.'},{author:'bot',text:'Задавай вопрос?'},],
            4:[{author:'bot',text:'Привет я бот Валера'},{author:'bot',text:'Это чат номер 4.'},{author:'bot',text:'Задавай вопрос?'},],
            5:[{author:'bot',text:'Привет я бот Валера'},{author:'bot',text:'Это чат номер 5.'},{author:'bot',text:'Задавай вопрос?'},],
        },
        newMessage: '',
        author:'',
    }
    onChangeName = (event) =>{
        this.setState({author: event.target.value})
    }
    answerForBot = (props) =>{
        let newChats = {...this.state.chats}
        newChats[this.props.chatId].push({author:'bot', text:this.state.author +', мая-твая нипонимать!'})
         this.setState({
             chats:newChats,
         })
    }
    onSentMessage = (event) =>{
        let newChats = {...this.state.chats}
       newChats[this.props.chatId].push({author:this.state.author,text:this.state.newMessage})
        this.setState({
            chats:newChats,
            newMessage:'',
        })
        setTimeout(this.answerForBot, 1000);
       

    }
    onChangeTextarea = (event) => {
        this.setState({newMessage:event.target.value})
    }
    render() {
        return (
            <div className="messageField-wrapper">
                <MessageForm onChangeName={this.onChangeName}
                            onChangeTextarea={this.onChangeTextarea}
                            onSentMessage={this.onSentMessage}
                            onSentMessage={this.onSentMessage}
                            newMessage={this.state.newMessage} />
                <MessagesList chat={this.state.chats[this.props.chatId]}/>
            </div>
           
        )
    }
}