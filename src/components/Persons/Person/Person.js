import React from 'react';
//import styles from './Person.module.css';

const person = (props) => (
	// <div className={props.class ? styles.person + ' ' + props.class : styles.person} >
	<React.Fragment>
		<p onClick={props.click}>I'm a {props.name} and I'm {props.age} years old. </p>
		<p>
			{props.children}
		</p>
		<input type="text" onChange={props.change} placeholder={props.name}/>
		<button onClick={props.click} >delete</button>
	</React.Fragment>
	//</div> 
);

export default person;
