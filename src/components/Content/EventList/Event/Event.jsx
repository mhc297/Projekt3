// import the libs we need
import React, { Component } from 'react';
import './normalize.css';
import Display from './Display/Display';
import style from './Content.css';

// create a React Component called _Event_
class Event extends Component {

  render(){
    return (
      <div id="event-container">
        <Display />
      </div>
    );
  }
}

export default Event;
