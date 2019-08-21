import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{ name: 'Max', age: 28 },
			{ name: 'Horse', age: 21 },
			{ name: 'Boo', age: 2 },
		]
	}
	switchNameHandler = ()=>{
		this.setState({
			persons: [
				{ name: 'Maximilian', age: this.state.persons[0].age === 28 ? 12: 28 },
				{ name: 'Horse', age: 21 },
				{ name: 'Boo', age: 12 },
			]
		});
		
	}

	render() {
		return (
			<div className="App">
				<h1>Hi,  I'm React App</h1>
				<p>this is really working</p>
				<button onClick={() => this.switchNameHandler()}>Switch Name</button>
				<Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
				<Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
				<Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Hobby: Racing</Person>
				
			</div>
		);
	}
}

export default App;
