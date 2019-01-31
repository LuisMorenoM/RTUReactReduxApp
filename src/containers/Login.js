import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import authActions from '../actions/auth'

class Login extends Component {

	constructor(props) {
		super(props)

		this.handleSubmit = this.handleSubmit.bind(this)
	}

	componentDidMount() {
	}

	handleSubmit(e) {
		e.preventDefault();
		let credentials = {
			name:     e.target.name.value,
			password: e.target.password.value
		}
		this.props.login(credentials)
	}

	render() {
		return (
			<div className="">
				<form onSubmit={this.handleSubmit}>
					<span>
						<label htmlFor="name">Name</label>
						<input id="name" type="text" name="name"/>
					</span>
					<span>
						<label htmlFor="password">Password</label>
						<input id="password" type="password" name="password"/>
					</span>
					<button type="submit" value="Submit" >Login</button>
				</form>
				<div>
					<span>Need account?</span>
					<Link to="/signup">Sign up</Link>
				</div>
			</div>
			);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		isLogged: state.authReducer.isLogged,
		user: state.authReducer.name
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		login: (param) => dispatch(authActions.login(param))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

