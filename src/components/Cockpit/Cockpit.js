import React, { useEffect } from 'react';
import styles from './Cockpit.module.css';

const Cockpit = props => {
	
	useEffect(() => {
		
		// Http request
		setTimeout(() => {
			console.log('data fetched');
		}, 1000);

		return () => {
			console.log('Cockipt clean up work');
		};
	}, [props.persons]); // what need to change
	
	let classes = [];
	let btnClass = '';


	if (props.persons.length <= 2) classes.push(styles.red);
	if (props.persons.length <= 1) classes.push(styles.bold);

	if (props.showPerson) btnClass = styles.red;
	return (
		<div className={styles.Cockpit}>

			<h1>{props.title}</h1>
			<p className={classes.join(' ')}>this is really working</p>

			<button
				className={btnClass}
				onClick={props.clicked}
			>Switch Name</button>

		</div>
	);
};
export default Cockpit;
