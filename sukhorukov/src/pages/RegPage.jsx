import React, { PureComponent } from 'react';

export class RegPage extends PureComponent {
  
  state = {
    username: '',
    password: '',
  }

  handleSignIn = () => {
    const { username, password } = this.state;
    fetch('http://localhost:3000/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username, password})
    })
      .then(response => {
        return response.json();
      })
      .then((data) => {
        window.location.replace('/');
      });
  }

  handleTextChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <input onChange={this.handleTextChange} name="username" type="text" value={username} /><br />
        <input onChange={this.handleTextChange} name="password" type="text" value={password} /><br />
        <button onClick={this.handleSignIn}>Sign In</button>
      </div>
    );
  }
}