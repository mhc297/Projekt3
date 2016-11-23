import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Video extends Component {

showvideo(props) {
  let videoSrc = "http://www.youtube.com/embed/g0pSg0XeBck?autoplay=0&rel=&modestbranding=1"
          return(
          <div className="vdcontainer" height="500px">
            <iframe className="player" allowFullScreen="allowfullscreen" type="text/html" width="50%" height="500px"
            src={videoSrc}
            frameBorder="0" />
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
