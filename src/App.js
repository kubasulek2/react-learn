import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{ name: 'Max', age: 28 },
			{ name: 'Horse', age: 21 },
			{ name: 'Boo', age: 2 },
		],
		showPersons: false
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
	nameChangedHandler = (event) => {
		this.setState({
			persons: [
				{ name: this.state.persons[0].name, age: this.state.persons[0].age },
				{ name: event.target.value, age: this.state.persons[1].age },
				{ name: this.state.persons[2].name, age: this.state.persons[2].age },

			]
		});
	}
	togglePersonsHandler = () => {
		this.setState({ showPersons: !this.state.showPersons });
	}

	deletePersonHandler = (personIndex) => {
		//const persons = this.state.persons.slice(); //shallow copy
		//const persons = [...this.state.persons];	//shallow copy, also for objects
		//const persons = Array.from(this.state.persons); //shallow copy
		const persons = JSON.parse(JSON.stringify(this.state.persons)); // deep copy also for objects
		persons.splice(personIndex, 1);
		this.setState({ persons: persons });
	}

	render() {

		const style = {
			backgroundColor: 'indianred',
			padding: '1rem',
			color: 'white'
		};
		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return (
							<Person
								key={index + 1}
								click={() => this.deletePersonHandler(index)}
								name={person.name}
								age={person.age}
							/>
						);
					})}
				</div>);
		}



		return (
			<div className="App">
				<h1>Hi,  I'm React App</h1>
				<p>this is really working</p>

				<button
					style={style}
					onClick={this.togglePersonsHandler}
				>
					Switch Name
				</button>

				{persons}

			</div>
		);
	}
}

export default App;
