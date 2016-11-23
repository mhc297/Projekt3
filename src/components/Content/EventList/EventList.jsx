// import the libs we need
import React, { Component } from 'react';
import '../../normalize.css';
import style from './EventList.css';
import Event from './Event/Event.jsx'

// create a React Component called _Display_
class EventList extends Component {
  render(){
    // console.log(this.props.events)
    return(
      <Event
        name={this.props.events.name}
        url={this.props.events.url}
        // venue={this.props.events._embedded.venues.name}
        // venueCity={this.props.events._embedded.venues.city.name}
      />
    )

  }
}

export default EventList;
