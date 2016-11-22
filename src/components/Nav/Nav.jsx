// import the libs we need
import React, { Component } from 'react';
import './normalize.css';
import Search from './Search/Search';
import style from './Nav.css';

// create a React Component called _EventList_
class Nav extends Component {

  render(){
    return (
      <nav>
        <Search />
      </nav>
    );
  }
}

export default Nav;
