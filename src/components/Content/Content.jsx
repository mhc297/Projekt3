// import the libs we need
import React, { Component } from 'react';
import './normalize.css';
import EventList from './EventList/EventList';
import Youtube from './Youtube/Youtube';
import style from './Content.css';

// create a React Component called _App_
class Content extends Component {

  render(){
    return (
      <div id="content-container">
        <EventList />
        <Youtube />
      </div>
    );
  }
}

export default Content;
