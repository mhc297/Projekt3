// import the libs we need
import React, { Component } from 'react';
// import '../normalize.css';
import EventList from './EventList/EventList.jsx';
import Youtube from './Youtube/Youtube.jsx';
import style from './Content.css';


// create a React Component called _App_
class Content extends Component {
  render(){
    return (
      <div id="content-container">
        <EventList
          events={this.props.eventData}
          bandName={this.props.bandName}
          eventDate={this.props.eventDate}
          eventName={this.props.eventName}
          eventTime={this.props.eventTime}
          eventVenue={this.props.eventVenue}
          eventCity={this.props.eventCity}
        />
        <Youtube
          videoID = {this.props.videoID}
        />

      </div>
    );
  }
}

export default Content;
