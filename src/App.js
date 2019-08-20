import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Hi,  I&apos;m React App</h1>
				<p>this is really working</p>
				<Person />
				<Person />
				<Person />
				<Person />
			</div>
		);
	}
}

export default App;
