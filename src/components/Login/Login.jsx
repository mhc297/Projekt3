import React, { Component } from 'react';

// create a React Component called _App_
class Login extends Component {

  render(){
    return (
      <div id="form-container">
        <input
          type="text"
          placeholder="Username"
          value={this.props.logInUsername}
          onChange={this.props.updateFormUsername}
        />
        <input
          type="password"
          placeholder="Password"
          value={this.props.logInPassword}
          onChange={this.props.updateFormPassword}
        />
        <button onClick={this.props.handleUser}>
          Log In!
        </button>
      </div>
    );
  }
}

export default Login;
