import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Datal from './datal';
class App extends Component {
	state={
		persons:[{name:'mad max',age:22},{name:'2t',age:100},{name:'fff',age:250}],
		projects:[{title:'t1',category:'c1'},{title:'t2',category:'c2'},{title:'t3',category:'c3'}]
	}
	
	switchName = (newName) => {
		this.setState({
			persons:[
			{name:newName,age:22},{name:'fury road',age:100},{name:'eorge miller',age:250}
			]
		});
		//this.state.persons.name[1].name='Fury Road';
	}
	
	nameChangedHandler=(event) => {
		this.setState({
			persons:[
			{name:'dddd',age:212},{name:event.target.value,age:120},{name:'eorge miller',age:250}
			]
		});
	}
	
  render() {
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'it works now'));
  const style={
	  backgroundColor:'red',
	  font:'inherit',
	  border:'1px solid blue',
	  padding:'8px'
  }
      return(
			<div className="App">
			<Datal projects={this.state.projects}/>
			<button style={style} onClick={()=>this.switchName('maxi!!!')}>Switch name</button>
		<Person 
		name={this.state.persons[0].name} 
		age={this.state.persons[0].age}>
		Lorem ipsum dolor sit amet!!
		</Person>
		<Person 
		name={this.state.persons[1].name} 
		age={this.state.persons[1].age}
		click={this.switchName.bind(this,'tempi')}
		changed={this.nameChangedHandler}>
		Lorem 2 ipsum dolor sit amet!!
		</Person>
		<Person 
		name={this.state.persons[2].name} 
		age={this.state.persons[2].age}>
		Lorem 3 ipsum dolor sit amet!!
		</Person>
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
