import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { Profile } from 'components/Profile';
import { load } from 'actions/profile';


class ProfileContainer extends PureComponent {
  componentDidMount() {
    const { loadProfile } = this.props;

    loadProfile();
  }

  handleUserAdd() {
    const { addUser } = this.props;

    addUser();
  }

  render() {
    const { profile } = this.props;
    return(
      <Profile profile={profile} />
    )
  }
}

function mapStateToProps(state, ownProps) {
  const profile = state.profile.get('entries');

  return{
    profile: ({ name: profile.get('name'), surname: profile.get('surname'), email: profile.get('email') }),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadProfile: () => dispatch(load()),
    addUser: () => dispatch(addUser(user)),
  }
}

export const ProfileRedux = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);