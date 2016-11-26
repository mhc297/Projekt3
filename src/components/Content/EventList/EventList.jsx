// import the libs we need
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../normalize.css';
import style from './EventList.css';
import Event from './Event/Event.jsx'

// create a React Component called _Display_
class EventList extends Component {
  render(){
    console.log(this.props.events);
    console.log(this.props.events.name);

    return(
      <Event
        name={this.props.events.name}
        url={this.props.events.url}
        // venue={this.props.venues.name}
        // venueState={this.props.venues.state.name}
        // venueCity={this.props.venues.city.name}
      />
    )

  }
}

export default EventList;
