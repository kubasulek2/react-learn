import React from 'react';
import './Person.css';

const person = (props) => {

	return (
		<div className={props.class ? 'Person ' + props.class : 'Person'}>
			<p onClick={props.click}>I'm a {props.name} and I'm {props.age} years old. </p>
			<p>
				{props.children}
			</p>
			<input type="text" onChange={props.change} placeholder={props.name}/>
			<button onClick={props.click} >delete</button>
		</div>
	);
};
export default person;

