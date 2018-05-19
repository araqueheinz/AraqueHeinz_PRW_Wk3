import React, { Component } from 'react';
//Router
import {NavLink} from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
        <nav>
        <NavLink to="/Expenses">Expenses</NavLink>
        <NavLink to="/Graph">Graph</NavLink>
        </nav>
    );
  }
}

export default Nav; 