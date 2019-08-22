import React, { Component } from 'react';
import styles from './App.module.css';
import Persons from '../components/Persons/persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
	
	state = {
		persons: [
			{ id: '1', name: 'Max', age: 28 },
			{ id: '2', name: 'Horse', age: 21 },
			{ id: '3', name: 'Boo', age: 2 },
		],
		showPersons: false,
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

	nameChangedHandler = (id, event) => {

		const
			personIndex = this.state.persons.findIndex(person => person.id === id),
			person = { ...this.state.persons[personIndex] };


		person.name = event.target.value;

		const persons = [...this.state.persons];
		persons[personIndex] = person;
		this.setState({ persons: persons });

	}

	togglePersonsHandler = () => {
		this.setState({ showPersons: !this.state.showPersons });
	}

	deletePersonHandler = (personIndex) => {
		const persons = JSON.parse(JSON.stringify(this.state.persons)); 
		persons.splice(personIndex, 1);
		this.setState({ persons: persons });
	}

	render() {
		let persons = null;
		if (this.state.showPersons) {
			persons = (
				<Persons
					persons={this.state.persons}
					clicked={this.deletePersonHandler}
					changed={this.nameChangedHandler}
				/>
			);
		}

		return (
			<div className={styles.App}>
				<Cockpit
					title ={this.props.title}
					persons={this.state.persons}
					showPerson={this.state.showPersons} 
					clicked={this.togglePersonsHandler} />
				{persons}

			</div>
		);
	}
}

export default App;
