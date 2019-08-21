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
	switchNameHandler = (newName) => {
		this.setState({
			persons: [
				{ name: newName, age: this.state.persons[0].age === 28 ? 12 : 28 },
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
				<button onClick={this.switchNameHandler.bind(this, 'Max!!')}>Switch Name</button>  {/* one way of passing arguments, use array[] if more arguments */}
				<Person
					name={this.state.persons[0].name} 
					age={this.state.persons[0].age}
				/>
				<Person
					name={this.state.persons[1].name}
					age={this.state.persons[1].age}
					click={ ()=> this.switchNameHandler('Olo')} //another way of passing arguments
				/>
				<Person
					name={this.state.persons[2].name}
					age={this.state.persons[2].age}
				>
					Hobby: Racing <br /> 1.2.3
				</Person>

			</div>
		);
	}
}

export default App;
