// import the libs we need
import React, { Component } from 'react';
// import '../normalize.css';
import EventList from './EventList/EventList.jsx';
import Youtube from './Youtube/Youtube.jsx';
import style from './Content.css';


// create a React Component called _App_
class Content extends Component {
  render(){
  console.log(this.props.eventData)
    return (
      <div id="content-container">
        <EventList
          events={this.props.eventData}
        />
        <Youtube
          videoID = {this.props.videoID}
        />

      </div>
    );
  }
}

export default Content;
