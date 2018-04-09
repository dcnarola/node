import React from 'react';
const person = (props) => {
	return (
		<div>
		<p>this is a {props.name}</p>
		<p>{props.children}</p>
		</div>
	)
}

export default person;
