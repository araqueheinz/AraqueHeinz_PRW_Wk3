
import React, { Component } from 'react';

//import './App.css';

class ExpenseList extends Component {
  render() {
    return (
      <li key={this.props.id} className="list">
        <span>{this.props.value.expense}</span>
        <span>${this.props.value.amount}</span>
        <button onClick={this.props.deleteMe}> Delete from list</button>
      </li>
    );
  }
}

export default ExpenseList