// import the libs we need
import React, { Component } from 'react';
import '../../../normalize.css';
import Display from './Display/Display.jsx';
import style from '../../Content.css';

// create a React Component called _Event_
class Event extends Component {

  render(){
    return (
        <Display />
    );
  }
}

export default Event;
