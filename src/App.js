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
		this.setState({showPersons: !this.state.showPersons});
	}

	render() {
		const style = {
			backgroundColor: 'indianred',
			padding: '1rem',
			color: 'white'
		};

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
				{ this.state.showPersons ?
					<div>
						<Person
							name={this.state.persons[0].name}
							age={this.state.persons[0].age}
						/>
						<Person
							class='pointer'
							name={this.state.persons[1].name}
							age={this.state.persons[1].age}
							change={this.nameChangedHandler}
							click={() => this.switchNameHandler('Olo')}
						/>
						<Person
							name={this.state.persons[2].name}
							age={this.state.persons[2].age}
		
						>
							Hobby: Racing <br /> 1.2.3
						</Person>
					</div>
					
					: null
				}

			</div>
		);
	}
}

export default App;
