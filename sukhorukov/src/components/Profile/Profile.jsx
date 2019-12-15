import React, { Component } from 'react';

export class Profile extends Component {
  render(){
    const { profile } = this.props;
    return(
      <div>
        <p>Name: {profile.name}</p>
        <p>Surname: {profile.surname}</p>
        <p>Email: {profile.email}</p>
      </div>
    );
  }
}