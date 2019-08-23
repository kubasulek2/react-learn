import React, { Component } from 'react';
import styles from './Person.module.css';
import Aux from '../../../HOC/Aux';
import { withClass2 } from '../../../HOC/WithClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';



class Person extends Component {

	constructor(props) {
		super(props);
		this.input = React.createRef();
	}

	static contextType = AuthContext;
	componentDidMount() {

		console.log(this.context);

	}

	render() {
		return (
			//<React.Fragment>
			<Aux>
				<p onClick={this.props.swap}>I'm a {this.props.name} and I'm {this.props.age} years old. </p>
				<p>
					{this.context.authenticated ? 'Logged in' : ''}
				</p>
				<input
					type="text"
					onChange={this.props.change}
					placeholder={this.props.name}
					ref={this.input}
				//ref={(inputEl)=> this.myName = inputEl} //before react
				/>
				<button onClick={this.props.click} >delete</button>
			</Aux>
			//</React.Fragment>
		);
	}
}
Person.propTypes = {
	name: PropTypes.string,
	click: PropTypes.func,
	change: PropTypes.func,
	age: PropTypes.number
};

export default withClass2(Person, styles.person);
