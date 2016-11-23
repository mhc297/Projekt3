// import the libs we need
import React, { Component } from 'react';
import './normalize.css';
import Nav from './Nav/Nav.jsx';
import Content from './Content/Content.jsx';
import style from './App.css';
import Youtube from './Content/Youtube/Youtube.jsx';
// create a React Component called _App_

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      videoID: '',
      userLat: '0',
      userLong: '0'
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
    fetch(`/:event`)
    .then(r => r.json())
    .then((data) => {
      console.log(data);
      this.setState({
        videoID: data.items[0].id.videoId,
      })
    })
    .catch(error => console.log('Error: ', error))
  }

  render(){
    return (
      <div id="app-container">
        <header>
          <h1>PRO⅄ECT.Ɛ</h1>
        </header>
        <Nav
          searchTerm={this.state.searchTerm}
          handleUpdateSearch={event => this.handleUpdateSearch(event)}
          handleSubmitSearch={event => this.handleSubmitSearch(event)}
        />
        <Content
          videoID={this.state.videoID}
        />
      </div>
    );
  }
}
export default App;
