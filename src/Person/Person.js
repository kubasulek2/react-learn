import React from 'react';
import styles from './Person.module.css';

const person = (props) => {


	return (
		<div className={props.class ? styles.person + ' ' + props.class : styles.person} >
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
