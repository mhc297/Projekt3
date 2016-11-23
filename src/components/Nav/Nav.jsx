// import the libs we need
import React, { Component } from 'react';
import '../normalize.css';
import Search from './Search/Search.jsx';
import style from './Nav.css';

// create a React Component called _EventList_
class Nav extends Component {

  render(){
    return (
        <Search />
    );
  }
}

export default Nav;
