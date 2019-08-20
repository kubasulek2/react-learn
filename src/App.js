import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Hi,  I&apos;m React App</h1>
				<p>this is really working</p>
				<Person name='Max' age='28' />
				<Person name='Horse' age='21' />
				<Person name='Boo' age='2'>Hobby: Racing</Person>
			</div>
		);
	}
}

export default App;
