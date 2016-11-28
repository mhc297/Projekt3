// import the libs we need
import React, { Component } from 'react';
// import '../../../normalize.css';
import style from '../../../App.css';


// create a React Component called Event
class Event extends Component {
  render() {
    return (
      <div id="event-item">
        <h2>{this.props.bandName}</h2>
        <h4>{this.props.eventName}</h4>
        <h4>{this.props.eventVenue}</h4>
        <h4>{this.props.eventCity}</h4>
        <h4>{this.props.eventDate}</h4>
        <h4>{this.props.eventTime}</h4>
        <a href={this.props.url}>Click Here to Purchase Tickets to an Event</a>
      </div>
    );
  }
}
export default Event;
