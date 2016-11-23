// import the libs we need
import React, { Component } from 'react';
import '../../../normalize.css';

// create a React Component called Event
class Event extends Component {
  render() {
    return (
      <div className="event-item">
        <h2>{this.props.name}</h2>
        <a href={this.props.url}>Click Here For More Info</a>
        <h2>{this.props.venue}</h2>
        <h2>{this.props.venueCity}</h2>
      </div>
    );
  }
}
export default Event;
