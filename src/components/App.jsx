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
      eventData: [],
      userLat: '0',
      userLong: '0',
      video: []
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
      console.log("Longitude:", long)
      console.log("Latitude:", lat)

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
         if (events.page.totalElements == 0){
          this.setState({
            eventData: ['None Available']
          })
        } else (
          this.setState({
            eventData: events._embedded.events[0],
            bandName: nameb,
            eventDate: date,
            eventName: namee,
            eventTime: time,
            eventVenue: venue,
            eventCity: city,
          })
        )
      })
      .catch(error => console.log('Error: ', error))
    )
  }

  getAllVids() {
    fetch(`/api/apiRoute`)
    .then(r => r.json())
    .then((data) => {
      this.setState({
        videos: data
      });
      console.log(this.state);
    })
    .catch(err => console.log(err));
  }

  handleFormSubmit() {
      fetch('/api/apiRoute', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          name: this.state.searchTerm,
          video: this.state.videoId
        })
      })
      .then(this.setState({
        searchTerm: '',
        videoId: ''
      }))
      .then(this.getAllVids())
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
          <h1><a href="/">PR<span>ʞ</span>⅄EKT.Ɛ</a></h1>
          <ul>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
            <li><a href="/profile">Profile</a></li>
          </ul>

        </header>
        <Nav
          searchTerm={this.state.searchTerm}
          videoId={this.state.videoId}
          video={this.state.video}
          getAllVids={this.getAllVids.bind(this)}
          handleUpdateSearch={event => this.handleUpdateSearch(event)}
          handleSubmitSearch={event => this.handleSubmitSearch(event)}
          handleFormSubmit={() => this.handleFormSubmit()}
          handleDeletion={this.handleDeletion.bind(this)}
        />
        <Content
          videoId={this.state.videoId}
          eventData={this.state.eventData}
        />
      </div>
    );
  }
}
export default App;
