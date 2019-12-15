import React, { Component } from 'react';

import { HeaderRedux } from 'containers/HeaderContainer';
import { MessengerRedux } from 'containers/MessengerContainer';

export class App extends Component {
  render() {
    const { match } = this.props;
    return(
      <div>
        <HeaderRedux match={match}/>
        <MessengerRedux match={match}/>
      </div>
    );
  }
}

