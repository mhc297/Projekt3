// import the libs we need
import React, { Component } from 'react';
import LoginForm from './LoginForm/LoginForm.jsx';
import RegisterForm from './RegisterForm/RegisterForm.jsx'
import './normalize.css';
import style from './App.css';

// create a React Component called _App_
class App extends Component {

  render(){
    return (
      <div id="root-container">
        <header>
          <h1>Welcome to ProYect3</h1>
        </header>
        <RegisterForm />
      </div>
    );
  }
}

export default App;
