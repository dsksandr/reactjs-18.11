import './MainMenu.scss';

import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';


export class MainMenu extends Component {

    render() {
        return (
            <div className="main-menu">
                <Fab aria-label="mainMenu">
                    <MenuIcon />
                </Fab>
            </div>
        )
    }
}
