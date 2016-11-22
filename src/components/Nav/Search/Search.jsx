// import the libs we need
import React, { Component } from 'react';
import '../../normalize.css';
import style from './Search.css';

// create a React Component called _EventList_
class Nav extends Component {

  render(){
    return (
      <div className="search-bar">
        <input type="text" placeholder="Enter an Artist's Name Here" />
        <button>Submit</button>
      </div>
    );
  }
}

export default Nav;
