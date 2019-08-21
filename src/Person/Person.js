import React from 'react';

const person = (props) => {
	return (
		<p className='person'>I'm a {props.name} and I'm {props.age} years old. {props.children}</p>
	);
};
export default person;

