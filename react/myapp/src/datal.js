import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Datal extends Component {
	deleteProject(id){
		this.props.onDelete(id);
	}
	render(){
		let items;
	if(this.props.projects){
		items=this.props.projects.map(project=>{
			return(
	<li>{project.id}--{project.title}--{project.category}-<a href="#" onClick={this.deleteProject.bind(this,this.props.projects.id)}>X</a></li>
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

/*Datal.propTypes={
	projects: React.PropTypes.array,
	onDelete: React.PropTypes.func
}*/
 
export default Datal;
