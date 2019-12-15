import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { Header } from 'components/Header';

class HeaderContainer extends PureComponent {
  render() {
    const { name } = this.props
    return <Header name={name}/>
  }
}

function mapStateToProps(state, props) {
  const chats = state.chats.get('entries');
  const { match } = props;

  let name = "Messenger"

  if (match && chats.has(match.params.id)) {
    name = chats.getIn([match.params.id, 'name']);
  }

  return {name};
}

export const HeaderRedux = connect(mapStateToProps)(HeaderContainer)