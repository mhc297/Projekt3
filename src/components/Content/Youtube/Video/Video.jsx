import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Video extends Component {

showvideo(props) {
  let videoSrc = "http://www.youtube.com/embed/h23R9lEMRMY?autoplay=1&rel=&modestbranding=1"
          return(
          <div className="vdcontainer" height="500px">
            <iframe className="player" type="text/html" width="50%" height="100%"
            src={videoSrc}
            frameborder="0" />
                </div>
              )
}

render() {
  return(
    <div>
    {this.showvideo()}
  </div>
    )
  }
}

export default Video;
