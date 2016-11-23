// import the libs we need
import React, { Component } from 'react';
import '../../normalize.css';
import style from './EventList.css';

// create a React Component called _Display_
class EventList extends Component {
  render(){
    const events = this.props.events.map((event, i) => {

    return (
      <Event
        key={i}
        name={event.name}
        date={event.start.dateTime}
        venue={venues.name}
        venueCity={venues.city.name}
      />
      );

    })
  }
}

export default EventList;
