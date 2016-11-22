// import the libs we need
import React, { Component } from 'react';

// create a React Component called RegisterForm
class RegisterForm extends Component {

  render(){
    return (
      <div className="Register-container">
    <h1><a id='top' href="/"><%= message %></a></h1>
    <a className='headlink' href="/login">Log In</a>
    <a className='headlink' href="/register">Register</a>
    <a className='headlink' href="/users/profile">Profile</a>
  </div>
<h2>Register for full access </h2>
  <form className="regForm" action="users" method="post" />
      <input type="text" name="user[username]" value="" placeholder="Username" />
      <input type="password" name="user[password]" value="" placeholder="Password" />
      <input type="submit" value="Register" />
  </form>
    );
  }
}

export default RegisterForm;
