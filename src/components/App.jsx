// import the libs we need
import React, { Component } from 'react';
import './normalize.css';
import style from './App.css';
import Nav from './Nav/Nav.jsx';
import Content from './Content/Content.jsx';
import Youtube from './Content/Youtube/Youtube.jsx';
// create a React Component called _App_

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      videoID: '',
      eventData: {},
      userLat: '0',
      userLong: '0',
      videos: []
    }
  }

  componentDidMount(){
    this.getUserLocation()
  }

  getUserLocation(){
    let options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    function success(pos) {
      let crd = pos.coords;

      let long = crd.longitude
      let lat = crd.latitude
      console.log("Long is ", long)
      console.log("Lat is ", lat)

      this.setState({
        userLat: lat,
        userLong: long
      })
    };

    function error(err) {
      console.warn('ERROR(' + err.code + '): ' + err.message);
    };

    navigator.geolocation.getCurrentPosition(success.bind(this), error, options);
  }

  handleUpdateSearch(e) {
    this.setState({
      searchTerm: e.target.value
    });
  }

  handleSubmitSearch() {
    console.log("this.state.searchTerm is ", this.state.searchTerm)
    fetch(`/api/video/${this.state.searchTerm}`)
    .then(r => r.json())
    .then((videos) => {
      console.log("videos: ", videos);
      console.log("videos drilldown: ", videos.items[0].id.videoId);
      this.setState({
        videoID: videos.items[0].id.videoId,
      })
    })
    .then(fetch(`/api/event/${this.state.searchTerm}/${this.state.userLat}/${this.state.userLong}`)
      .then(r => r.json())
      .then((events) => {
        console.log("events: ", events);
        let bandName = events._embedded.events[0]._embedded.attractions[0].name
        console.log("band name ", events._embedded.events[0]._embedded.attractions[0].name)
        console.log("events.page.totalElements ", events.page.totalElements);
        let eventName = events._embedded.events[0].name
        console.log("events._embedded.events[0].name", events._embedded.events[0].name)
        let venue = events._embedded.events[0]._embedded.venues[0].name
        console.log("Venue is ", events._embedded.events[0]._embedded.venues[0].name)
        let city = events._embedded.events[0]._embedded.venues[0].city.name
        console.log("City is ", events._embedded.events[0]._embedded.venues[0].city.name)
        let date = events._embedded.events[0].dates.start.localDate
        console.log("Date is ", events._embedded.events[0].dates.start.localDate)
         if (events.page.totalElements == 0){
          this.setState({
            eventData: ['None Available']
          })
        } else (
          this.setState({
            eventData: events._embedded.events[0]
          })
        )
      })
      .catch(error => console.log('Error: ', error))
    )

  }

  handleYoutubeLikes(id) {
      fetch(`/api/apiRoute/like/${id}`, {
        method: 'put'
      })
      .then(() => {
        let videoId = this.state.videoId.map((video) => {
          if(video.id === id) video.likes += 1;
          return video;
        })
        this.setState({ videoId });
      })
      .catch(err => console.log(err));
    }

  handleDeletion(id) {
    fetch(`/api/apiRoute${id}`, {
      method: 'delete',
    })
    .then(() => {
      const videoId = this.state.videoId.filter((vid) => {
        return vid.id !== id;
      });
      this.setState({ videoId: videoId })
    })
  }


  render(){
    return (
      <div id="app-container">
        <header>
          <h1>PR<span>ʞ</span>⅄EKT.Ɛ</h1>
          <ul>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
            <li><a href="/profile">Profile</a></li>
          </ul>

        </header>
        <Nav
          searchTerm={this.state.searchTerm}
          handleUpdateSearch={event => this.handleUpdateSearch(event)}
          handleSubmitSearch={event => this.handleSubmitSearch(event)}
        />
        <Content
          videoID={this.state.videoID}
          eventData={this.state.eventData}
        />
      </div>
    );
  }
}
export default App;
