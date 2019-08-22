import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {

	const style = {
		'@media (min-width: 500px)':{
			width: '450px'
		}
	};

	return (
		<div className={props.class ? 'Person ' + props.class : 'Person'} style={style}>
			<p onClick={props.click}>I'm a {props.name} and I'm {props.age} years old. </p>
			<p>
				{props.children}
			</p>
			<input type="text" onChange={props.change} placeholder={props.name}/>
			<button onClick={props.click} >delete</button>
		</div>
	);
};
export default Radium(person);

