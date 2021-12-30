import React, { Component, useEffect, useState } from 'react';
import styles from './Start.module.css';


class Start extends Component{
  constructor(props){
    super(props);
    this.state = {name: "", socket: this.props.socket};
    this.handleChanges = this.handleChanges.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChanges(event){
    this.setState({name:event.target.value});
  }
  handleSubmit(event){
    event.preventDefault();
    console.log(this.state.name);
    this.state.socket.emit("send_player_name", {name: this.state.name});
  }
  render(){
    return(
      <div>
        <h1>Welcome to DAS QUIZ...</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Your Name:
            <input type="text" value={this.state.name} onChange={this.handleChanges}/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}
Start.propTypes = {};

Start.defaultProps = {};

export default Start;
