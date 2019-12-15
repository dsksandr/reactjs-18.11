import './Messamger.css'

import React from 'react';

import UserList from 'components/UserList/UserList';
import { MessageField } from 'components/MessageField/MessageField';
import { Header } from 'components/Header/Header';

export class Messanger extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div className='messanger-wrapper'>
                    <UserList/>
                    <MessageField chatId={this.props.match.params.chatId}/>
                </div>
            </div>
        )
    }
}