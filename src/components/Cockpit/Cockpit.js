import React from 'react';
import styles from './Cockpit.module.css';

const Cockpit = props => {
	
	let classes = [];

	if (this.props.persons.length <= 2) classes.push(styles.red);
	if (this.props.persons.length <= 1) classes.push(styles.bold);

	return (
		<div>
			
			<h1>Hi,  I'm React App</h1>
			<p className={classes.join(' ')}>this is really working</p>

			<button
				className={btnClass}
				onClick={this.togglePersonsHandler}
			>Switch Name</button>

		</div>
	);
};
export default Cockpit;
