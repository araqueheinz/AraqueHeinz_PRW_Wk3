import React, { Component } from 'react';
import ExpenseList from './ExpenseList'
//import './App.css';

class Main extends Component {


  state ={
    expenseList:[
      {
        expense: 'Groceries',
        amount:  '200.00'
      }
    ]
  }

  componentDidMount(){
    if(localStorage.getItem('expenseList')){
      let expenseList = JSON.parse(localStorage.getItem('expenseList'));
      this.setState({expenseList: expenseList})
      console.log('this is Component Did Mount'+ expenseList)
    }
  }

  changeExpense = event =>{
    event.preventDefault();
    this.setState({expense: event.target.value})
  }

  changeAmount = event =>{
    event.preventDefault();
    let newAmount = event.target.value;
    newAmount = parseFloat(newAmount).toFixed(2);
    this.setState({amount: newAmount});
  }

  removeExpense = key => {
    let expenseList = this.state.expenseList;
    this.state.expenseList.splice(key, 1);
    this.setState({expenseList: this.state.expenseList});
    console.log('Remove Expense: ' + expenseList)
    console.log('Splice: Key, 1' + this.state.expenseList.splice(key, 1));
    localStorage.setItem('expenseList', JSON.stringify(expenseList));
  }

  addExpense = event =>{
    event.preventDefault();
    let expenseList = this.state.expenseList;
    if(this.state.expense == null){
      alert('please enter an expense ');
      return false;
    }
    if(this.state.amount == null){
      alert('please enter an amount');
      return false;
    }
    if(isNaN(this.state.amount)){
      alert('please enter a number');
      return false;
    }
  
    console.log(expenseList);
    this.state.expenseList.push({'expense': this.state.expense, 'amount': this.state.amount});
    this.setState({expenseList: this.state.expenseList})
    console.log(this.state)
    localStorage.setItem('expenseList', JSON.stringify(expenseList));
  }


  render() {
    console.log(this.state)
    let newExpense = this.state.expenseList.map((value, key) =>{
      return <ExpenseList value={value} key={key} deleteMe = {() => this.removeExpense(key)}/>
    })

    return (
      <section className="">
         <form onSubmit={this.addExpense}>
            <label>Expense</label>
            <input type="text" name="expense" onChange={this.changeExpense}/>
            <label>Amount</label>
            <input type="text" name="amount"  onChange={this.changeAmount}/>
            <button type="submit"> + add guest </button>
        </form>

      <section>
        <h2>Current Expense</h2>
          <ul>{newExpense}</ul>
      </section>
      </section>


    );
  }
}

export default Main;
