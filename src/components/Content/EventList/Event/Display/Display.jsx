// import the libs we need
import React, { Component } from 'react';
import './normalize.css';
import style from './Content.css';

// create a React Component called _Display_
class Display extends Component {

  render(){
    return (
      <div id="display-container">
        <h2>A event will display here</h2>
      </div>
    );
  }
}

export default Display;
