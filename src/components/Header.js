
import React, { Component } from 'react';
//import './App.css';
import Nav from './Nav';

class Header extends Component {
  render() {
    return (
      <header>
        <p> Heinz Expense list </p>
        <Nav/>
      </header>
    );
  }
}

export default Header;
