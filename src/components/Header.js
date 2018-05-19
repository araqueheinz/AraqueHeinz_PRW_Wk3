
import React, { Component } from 'react';
//import './App.css';

class Header extends Component {
  render() {
    return (
      <header style={styles.smallTxt}>
        <p> this is my header </p>
      </header>
    );
  }
}

export default Header;

const styles = {
  smallTxt: {
    color: 'red',
    fontSize: '16px',
    backgroundColor: 'blue'
  },
  lrgTxt: {
    color: 'blue',
    fontSize: '46px'
  }
}