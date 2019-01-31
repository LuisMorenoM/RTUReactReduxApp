import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import authActions from '../actions/auth'
import usersActions from '../actions/users'

class Signup extends Component {

	constructor(props) {
		super(props)

		this.handleSubmit = this.handleSubmit.bind(this)
	}

	componentDidMount() {
	}

	handleSubmit(e) {
		e.preventDefault();
		let user = {
			name:     e.target.name.value,
			email:    e.target.email.value,
			password: e.target.password.value
		}
		this.props.newUser(user)
	}

	render() {
		return (
			<div className="">
				<form onSubmit={this.handleSubmit}>
					<span>
						<label htmlFor="email">Emial</label>
						<input id="email" type="email" name="email"/>
					</span>
					<span>
						<label htmlFor="name">Name</label>
						<input id="name" type="text" name="name"/>
					</span>
					<span>
						<label htmlFor="password">Password</label>
						<input id="password" type="password" name="password"/>
					</span>
					<button type="submit" value="Submit" >Sign up</button>
				</form>
			</div>
			);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		isLogged: 	state.authReducer.isLogged,
		user: 		state.authReducer.name
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		newUser: (param) => {dispatch(usersActions.newUser(param))}
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup))

