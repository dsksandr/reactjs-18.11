import React, {Component} from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import {Link} from 'react-router-dom';

export class Header extends Component {
    render() {
        return (
            <Toolbar>
                <Link to='/'> Chats </Link>
                <Link to='/profile/'>Profile</Link>
            </Toolbar>
        )
    }
}