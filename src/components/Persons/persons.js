import React from 'react';
import Person from './Person/Person';
 
const persons = props => (
	props.persons.map((person, index) => {
		
		if (props.showPerson) {
			
			return (
				<Person
					key={person.id}
					name={person.name}
					age={person.age}
					change={props.changed.bind(this, person.id)}
					click={() => props.clicked(index)}
				/>
			);
		} else{
			return null;
		}
	})
);
export default persons;