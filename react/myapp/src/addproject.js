import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import uuid from 'uuid';

class Addproject extends Component {
	constructor(){
		super();
		this.state={
			newProject:{}
		}
	}
	static defaultProps = {
		categories:['Web Design','Web develop','Mobile develop']
	}
	handleSubmit(e){
		if(this.refs.title.value==='')
		{
			alert('title require');
		}else{
			this.setState({newProject:{
				id:uuid.v4(),
				title:this.refs.title.value,
				category:this.refs.category.value
			}},function(){
			   this.props.addProject(this.state.newProject);
			});
		}
		//alert(this.refs.title.value);
		e.preventDefault();	
	}
	render(){
		let categoryOptions=this.props.categories.map(category => {
			return <option key={category} value={category}>{category}</option>	
		});
		return(
			<div>
			<h3>Add project</h3>
			<form onSubmit={this.handleSubmit.bind(this)}>
			 <div>
				<label>Title</label>
				<input type="text" ref="title" />
			 </div>
			 <div>
				<label>Category</label><br/>
				<select ref="category">
					{categoryOptions}
				</select>
			 </div>
			 <input type="submit" value="submit"/>
			</form>
			</div>
		);
	}
}

export default Addproject;
