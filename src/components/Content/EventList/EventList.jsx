// import the libs we need
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import '../../normalize.css';
import style from '../../App.css';
import Event from './Event/Event.jsx'

// create a React Component called _Display_
class EventList extends Component {
  render(){
    let event = this.props.events;

    return(
      <div className="event-display">
      <Event
        name={this.props.events.name}
        url={this.props.events.url}
        bandName={this.props.bandName}
        eventDate={this.props.eventDate}
        eventName={this.props.eventName}
        eventTime={this.props.eventTime}
        eventVenue={this.props.eventVenue}
        eventCity={this.props.eventCity}
      />
      </div>
    )

  }
}

export default EventList;
