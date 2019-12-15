import './Layout.css';

import React, {Component} from 'react';
import {Header} from "components/Header";

export class Layout extends Component {
    render() {
        return (
            <div>
                <header className="header">
                    <Header/>
                </header>
                {this.props.content}
            </div>
        )
    }
}