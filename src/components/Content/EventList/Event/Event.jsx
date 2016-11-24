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
      </div>
    );
  }
}
export default Event;
