import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Datal extends Component {
	render(){
		let items;
	if(this.props.projects){
		items=this.props.projects.map(project=>{
			return(
		<li>{project.title}--{project.category}</li>
			);
		});
	}
		return(
			<li className="project">
			{items}
			</li>
		);
	}
}

export default Datal;
