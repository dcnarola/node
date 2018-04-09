import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
class App extends Component {
	state={
		persons:[{name:'mad max',age:22},{name:'2t',age:100},{name:'fff',age:250}]
	}
	
	switchName = () => {
		this.setState({
			persons:[
			{name:'mad max',age:22},{name:'fury road',age:100},{name:'eorge miller',age:250}
			]
		});
		//this.state.persons.name[1].name='Fury Road';
	}
	
  render() {
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'it works now'));
      return(
			<div className="App">
			<button onClick={this.switchName}>Switch name</button>
		<Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Lorem ipsum dolor sit amet!!</Person>
		<Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Lorem 2 ipsum dolor sit amet!!</Person>
		<Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Lorem 3 ipsum dolor sit amet!!</Person>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          ddTo get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
	  )
  }
}

export default App;
