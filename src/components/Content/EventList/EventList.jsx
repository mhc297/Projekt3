// import the libs we need
import React, { Component } from 'react';
import '../../normalize.css';
import Event from './Event/Event.jsx';
import style from '../Content.css';

// create a React Component called _EventList_
class EventList extends Component {

  render(){
    return (
        <Event />
    );
  }
}

export default EventList;
