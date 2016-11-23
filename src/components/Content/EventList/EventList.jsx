// import the libs we need
import React, { Component } from 'react';
import '../../normalize.css';
import style from './EventList.css';

// create a React Component called _Display_
class EventList extends Component {

  render(){
    return (
      <div id="event-container">
        <h2>An event will display here</h2>
      </div>
    );
  }
}

export default EventList;
