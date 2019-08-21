import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
	const [state, setState] = useState({
		persons: [
			{ name: 'Max', age: 28 },
			{ name: 'Horse', age: 21 },
			{ name: 'Boo', age: 2 },
			
		],
		otherState: 'abc'
	});

	const switchNameHandler = () => {
		setState({
			persons: [
				{ name: 'Maximilian', age: state.persons[0].age === 28 ? 12 : 28 },
				{ name: 'Horse', age: 21 },
				{ name: 'Boo', age: 12 },
			],
			otherState: state.otherState // must be here, because hooks not merging new state with old but overriding old one, or you can split your state by using useState multiple time
		});

	};

	
	return (
		<div className="App">

			<h1>Hi,  I'm React App</h1>
			<p>this is really working</p>
			<button onClick={() => switchNameHandler()}>Switch Name</button>
			<Person name={state.persons[0].name} age={state.persons[0].age} />
			<Person name={state.persons[1].name} age={state.persons[1].age} />
			<Person name={state.persons[2].name} age={state.persons[2].age}>Hobby: Racing</Person>
				
		</div>
	);
	
};

export default app;


