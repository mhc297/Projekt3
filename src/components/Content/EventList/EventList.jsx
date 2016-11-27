// import the libs we need
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import '../../normalize.css';
import style from './EventList.css';
import Event from './Event/Event.jsx'

// create a React Component called _Display_
class EventList extends Component {
  render(){
    let event = this.props.events
    console.log(event);
    console.log(this.props.events.name);
    // console.log(this.props.events.dates.timezone);

    return(
      <div className="event-display">
      <Event
        name={this.props.events.name}
        url={this.props.events.url}
        // venue={this.props.events.venues.name}
        // venueState={this.props.events.venues.state.name}
        // venueCity={this.props.events.venues.city.name}
      />
      </div>
    )

  }
}

export default EventList;
