import './ChatList.scss';

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Button } from '@material-ui/core';

export class ChatList extends PureComponent {

    render() {
        const { chats, addChat } = this.props;
        return (
            chats && chats.length && 
            <List className="chat-list">
                {chats.map((chat, idx) => 
                    <Link to={`/chats/${chat.id}`}>
                        <ListItem key={idx}>
                            <ListItemAvatar>
                                <Avatar alt={`avatar${chat.id}`} src={chat.avatar}/>
                            </ListItemAvatar>
                            <ListItemText primary={chat.name}></ListItemText>
                        </ListItem>
                    </Link>)}
                    <Button onClick={addChat}>
                        <ListItemText primary="+ Добавить чат"></ListItemText>
                    </Button>
                
            </List>

        );
    }
}
