// import the libs we need
import React, { Component } from 'react';
import './normalize.css';
import style from './App.css';
import RegisterForm from './RegisterForm/RegisterForm.jsx';

// create a React Component called _App_
class App extends Component {

  render(){
    return (
      <div id="app-container">
        <RegisterForm />
      </div>
    );
  }
}

export default App;
