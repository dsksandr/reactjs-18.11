import './Layout.scss';

import React, { Fragment, Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { MessengerRedux } from 'containers/MessengerContainer';
import { HeaderRedux } from 'containers/HeaderContainer';
import { ChatListRedux } from 'containers/ChatListContainer';


export class Layout extends Component {

    render() {
        return (
            <Fragment>
                <div className='layout'>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <HeaderRedux match={this.props.match}/>
                        </Grid>
                    </Grid>
                    <Container className="layout__container" maxwidth="lg" minwidth="sm">
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={4}>
                                <ChatListRedux />
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <MessengerRedux match={this.props.match}/>
                            </Grid>

                        </Grid>
                    </Container>
                </div>
            </Fragment>
        );
    }
}