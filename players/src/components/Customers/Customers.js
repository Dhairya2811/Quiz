import React, { Component } from 'react';
import styles from './Customers.module.css';

class Customers extends Component{
  constructor(){
    super();
    this.state = {
      customers:[],
    };
  }

  componentDidMount(){
    fetch("/api/customers")
    .then(res=>res.json())
    .then(customers=>{this.setState({
      customers: customers
    })});    
  }

  render(){
    return (
      <div className={styles.Customers}>
        <h1>Customers</h1>
        <ul>
          {this.state.customers.map(e=>{
            return <li key={e.id}>{e.name}</li>
          })}
        </ul>
      </div>
    );
  }
}
Customers.propTypes = {};

Customers.defaultProps = {};

export default Customers;
