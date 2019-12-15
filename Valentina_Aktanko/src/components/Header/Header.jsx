import './Header.scss';

import React, { PureComponent } from 'react';
import Container from '@material-ui/core/Container';

import { MainMenu } from 'components/MainMenu';

export class Header extends PureComponent {

    render() {
        const { currentChat } = this.props;
        return (
            <header className="page-header">
                <Container className="page-header__container" maxWidth="lg">  
                    <MainMenu />
                    {
                        currentChat && <h1 className="page-header__heading">Это чат № {currentChat}</h1>
                    }   
                </Container>
            </header>
        );
    }
}