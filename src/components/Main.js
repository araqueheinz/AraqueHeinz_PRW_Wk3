import React, { Component } from 'react';

import {Route} from 'react-router-dom';
//import './App.css';
//import the pages
import Expenses from './pages/Expenses'

class Main extends Component {

  render() {
    return (
      <section>
       <Route exact path='/' component={Expenses} />
       <Route exact path='/Expenses' component={Expenses}/>
       <Route exact path='/Graph' component={Expenses} />
      </section>
    );
  }
}

export default Main;
