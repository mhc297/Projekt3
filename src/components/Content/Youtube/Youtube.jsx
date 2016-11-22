// import the libs we need
import React, { Component } from 'react';
import './normalize.css';
import Video from './Video/Video';
import style from './Youtube.css';

// create a React Component called _EventList_
class Youtube extends Component {

  render(){
    return (
      <div id="youtube-container">
        <Video />
      </div>
    );
  }
}

export default Youtube;
