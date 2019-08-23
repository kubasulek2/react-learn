import React from 'react';
import styles from './Person.module.css';
import Aux from '../../../HOC/Aux';
import {withClass2} from '../../../HOC/WithClass';

const person = (props) => {	
	return(
		//<React.Fragment>
		<Aux>
			<p onClick={props.click}>I'm a {props.name} and I'm {props.age} years old. </p>
			<p>
				{props.children}
			</p>
			<input type="text" onChange={props.change} placeholder={props.name}/>
			<button onClick={props.click} >delete</button>
		</Aux> 
		//</React.Fragment>
	);
};
export default withClass2(person, styles.person);
