// import the libs we need
import React, { Component } from 'react';
// import './normalize.css';
import style from './App.css';
import Nav from './Nav/Nav.jsx';
import Content from './Content/Content.jsx';
import Youtube from './Content/Youtube/Youtube.jsx';


class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      videoID: '',
      eventData: {},
      bandName: '',
      eventDate: '',
      eventTime: '',
      eventName: '',
      eventVenue: '',
      eventCity: '',
      vidlikes: '',
      eventData: [],
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
        console.log("events.page.totalElements ", events.page.totalElements)
        console.log("band name ", events._embedded.events[0]._embedded.attractions[0].name)
        let nameb = events._embedded.events[0]._embedded.attractions[0].name
        console.log("events.page.totalElements ", events.page.totalElements);
        let namee = events._embedded.events[0].name
        console.log("event name ", events._embedded.events[0].name)
        let venue = events._embedded.events[0]._embedded.venues[0].name
        console.log("Venue is ", events._embedded.events[0]._embedded.venues[0].name)
        let city = events._embedded.events[0]._embedded.venues[0].city.name
        console.log("City is ", events._embedded.events[0]._embedded.venues[0].city.name)
        let date = events._embedded.events[0].dates.start.localDate
        console.log("Date is ", events._embedded.events[0].dates.start.localDate)
        let time = events._embedded.events[0].dates.start.localTime
        console.log("Time is ", events._embedded.events[0].dates.start.localTime)
        this.setState({
          eventData: events._embedded.events[0],
          bandName: nameb,
          eventDate: date,
          eventName: namee,
          eventTime: time,
          eventVenue: venue,
          eventCity: city,
        })
      })
      .catch(error => console.log('Error: ', error),
      this.setState({
       bandName: 'No Events Available in Your Area',
      })
      )
    )
  }

  handleYoutubeLikes(id) {
      fetch(`../routes/api/apiRoute/like/${id}`, {
        method: 'post'
      })
      .then(() => {
        let likes = this.state.vidlikes
          if(videoId === id) likes.vidlikes += 1;
          // return videoID;
          // this.setState({ videoId });
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
          bandName={this.state.bandName}
          eventDate={this.state.eventDate}
          eventName={this.state.eventName}
          eventTime={this.state.eventTime}
          eventVenue={this.state.eventVenue}
          eventCity={this.state.eventCity}
          handleYoutubeLikes={event => this.handleYoutubeLikes(event)}
        />
      </div>
    );
  }
}
export default App;
