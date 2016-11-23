// import the libs we need
import React, { Component } from 'react';
import '../../normalize.css';
import style from './EventList.css';
import Event from './Event/Event.jsx'

// create a React Component called _Display_
class EventList extends Component {
  render(){
    return(
      <Event />
    )
  }
}

export default EventList;
