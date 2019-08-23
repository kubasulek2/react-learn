import React, { useEffect } from 'react';
import styles from './Cockpit.module.css';

const Cockpit = props => {
	
	useEffect(() => {
		
		// Http request
		const timer = setTimeout(() => {
			console.log('data fetched');
		}, 1000);

		return () => {
			clearTimeout(timer)
			console.log('Cockipt clean up work: removed timer');
		};
	}, []); // what need to change
	
	useEffect(() => {
		console.log(' from cockpit');
	})
	let classes = [];
	let btnClass = '';


	if (props.personsLength <= 2) classes.push(styles.red);
	if (props.personsLength <= 1) classes.push(styles.bold);

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
export default React.memo(Cockpit);
