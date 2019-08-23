import React, {PureComponent} from 'react';
import Person from './Person/Person';

 
class Persons extends PureComponent{ 


	// shouldComponentUpdate(nextProps, nextState){
	// 	console.log(nextProps=== this.props); // this is false even though in console looks the same
		
	// 	return nextProps.persons !== this.props.persons; // this is true
	// }

	
	componentWillUnmount(){
		console.log('Persons Will Unmount');
		
	}
	componentDidUpdate(prevProps, prevState) {
		console.log('Persons updated');
	}
	
	render(){
		return this.props.persons.map((person, index) => (
			<Person
				key={person.id}
				name={person.name}
				age={person.age}
				change={this.props.changed.bind(this, person.id)}
				click={() => this.props.clicked(index)}
				swap={this.props.swap}
			/>)
			
		);
	}
}
export default Persons;