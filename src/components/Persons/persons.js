import React, {Component} from 'react';
import Person from './Person/Person';
 
class Persons extends Component{ 


	shouldComponentUpdate(nextProps, nextState){

		console.log(nextProps.persons !== this.props.persons);
		return nextProps.persons !== this.props.person;
	}
	componentWillUnmount(){
		console.log('Persons Will Unmount');
		
	}
	render(){
		return this.props.persons.map((person, index) => (
			<Person
				key={person.id}
				name={person.name}
				age={person.age}
				change={this.props.changed.bind(this, person.id)}
				click={() => this.props.clicked(index)}
			/>)
			
		);
	}
}
export default Persons;