import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Comp extends Component {
  
  render() {
  return(
	 <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={this.props.author.url}
          alt={this.props.author.name}
        />
        <div className="UserInfo-name">
          {this.props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {this.props.text}
      </div>
      
    </div>
  );
  }
}

export default Comp;
