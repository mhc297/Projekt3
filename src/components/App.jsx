// import the libs we need
import React, { Component } from 'react';
import './normalize.css';
import Nav from './Nav/Nav.jsx';
import Content from './Content/Content.jsx';
import style from './App.css';
import Video from './Content/Youtube/Video/Video.jsx';


// create a React Component called _App_
class App extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: '',
      videoID: ''
    }



  }

  render(){
    return (
      <div id="root-container">
        <header>
          <h1>Welcome to ProYect3</h1>
        </header>
        <Nav
        searchTerm: {this.state.searchTerm}
        />
        <Content:
          videoID={this.state.videoID}
        />

      </div>
    );
  }
}

export default App;
