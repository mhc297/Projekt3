import React, { Component } from 'react';
import style from './Register.css';

// create a React Component called _App_
class Register extends Component {

  render(){
    return (
      <div id={style['form-container']}>
        <img src="http://hdwallpaperbackgrounds.net/wp-content/uploads/2016/08/hd-wallpaper-background-13.jpg" alt="" />
        <form onSubmit={this.props.handleUser}>
        <input
          type="text"
          placeholder="Username"
          value={this.props.signUpUsername}
          onChange={this.props.updateFormUsername}
        />
        <input
          type="password"
          placeholder="Password"
          value={this.props.signUpPassword}
          onChange={this.props.updateFormPassword}
        />
        <button>
          SignUp!
        </button>
      </form>
      </div>
    );
  }
}

export default Register;
