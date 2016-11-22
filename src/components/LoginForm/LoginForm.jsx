// import the libs we need
import React, { Component } from 'react';

// create a React Component called _LoginForm_
class LoginForm extends Component {

  render(){
    return (
      <div className="loginForm-container">
        <h1>ENTER</h1>
      </div>
  <form class="" action="/authentication" method="post" />
      <input type="text" name="user[username]" value="" placeholder="Username" />
      <input type="password" name="user[password]" value="" placeholder="Password" />
      <input type="submit" name="name" value="Log in" />
  </form>

    );
  }
}

export default LoginForm;
