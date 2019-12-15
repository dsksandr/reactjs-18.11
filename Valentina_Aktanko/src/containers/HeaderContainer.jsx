import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { Header } from 'components/Header';

class HeaderContainer extends PureComponent {
    render () {
        const { currentChat } = this.props;
        return (
            <Header currentChat={currentChat}/>
        );
    }
}

function mapStateToProps(state, props) {
    const currentChat = props.match.params.id;
    return {currentChat}
}

export const HeaderRedux = connect(mapStateToProps)(HeaderContainer);