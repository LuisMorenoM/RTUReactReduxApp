import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import usersActions from '../actions/users'

class EditUser extends Component {

	constructor(props) {
		super(props)

		// this.getCurrentUser = this.getCurrentUser.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		if (!this.props.authUser.isLogged) {
			console.log("no logeado")	
		} 
	}

	componentDidMount() {
		// this.getCurrentUser()
	}

	componentDidUpdate(prevProps) {
		console.log("did update", prevProps)
		// if (prevProps.history.location.pathname !== prevProps.location.pathname) this.getCurrentUser()
	}


	shouldComponentUpdate(nextProps, nextState) {
		console.log("shouldComponentUpdate", nextProps, nextState)
		return true
	}

	getCurrentUser() {
		// this.props.getUser(this.props.match.params.userName)
	}

	handleSubmit(e) {
		e.preventDefault();
		let modUser = {
			description: 	e.target.description.value
		}
		this.props.modUser(modUser)
	}

	render() {
		console.log("render")
		return (
			<div className="">
				{ this.props.activeUser ?
					(
						<div>
							<h2>Edit {this.props.activeUser.name}'s Profile</h2>
						</div>
					)
				:
					(
						<div>
							<h4>User not found</h4>
						</div>
					)
				}
				{ this.props.authUser.isLogged &&
					(
						<div>
							<form onSubmit={this.handleSubmit}>
							<span>
								<label htmlFor="description">description</label>
								<input id="description" type="description" name="description"/>
							</span>
							<button type="submit" value="Submit" >Edit</button>
						</form>
						</div>
					)
				}
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		activeUser: 	state.usersReducer.activeUser,
		authUser: 		state.authReducer
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		modUser: (param) => dispatch(usersActions.modUser(param))
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditUser))

