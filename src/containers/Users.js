import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import authActions from '../actions/auth'
import usersActions from '../actions/users'

class Users extends Component {

	constructor(props) {
		super(props)

	}

	componentDidMount() {
		this.props.getAllUsers()
	}

	render() {
		return (
			<div className="">
				<h2>Users</h2>		
				<ul>
					{this.props.users &&
						this.props.users.map((user, i) => (
							<li key={i}><Link to={`/users/${user.name}`}>{user.name}</Link></li>
						))
					}
				</ul>
			</div>
			);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		users:    state.usersReducer.items
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getAllUsers: (param) => {dispatch(usersActions.getAllUsers(param))}
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Users))

