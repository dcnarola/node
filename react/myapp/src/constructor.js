import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Const extends Component {
  constructor(props){
	super(props);
	this.state={date:new Date()};
  }
  
  componentDidMount(){
	this.timerID=setInterval(()=>this.tick(),1000);
  }
  
  componentWillUnmount(){
	clearInterval(this.timerID);
  }
  
  tick(){
	this.setState({date:new Date()});
  }
  
  render() {
  return(
	<div><h1>hello</h1><p>it is {this.state.date.toLocaleTimeString()}</p></div>
  );
  }
}

export default Const;
