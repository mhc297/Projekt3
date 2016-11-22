// import the libs we need
import React, { Component } from 'react';
import './normalize.css';
import Event from './Event/Event';
import style from './Content.css';

// create a React Component called _EventList_
class EventList extends Component {

  render(){
    return (
      <div id="eventList-container">
        <Event />
      </div>
    );
  }
}

export default EventList;
