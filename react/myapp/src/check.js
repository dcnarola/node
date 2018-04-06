import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Test extends Component {
  
  render() {
  return(
	<div><h1>hello</h1><h2>it is {new Date().toLocaleTimeString()}</h2></div>
  );
  }
}

export default Test;
