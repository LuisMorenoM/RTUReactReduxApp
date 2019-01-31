import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import usersActions from '../actions/users'

class User extends Component {

	constructor(props) {
		super(props)

		this.displayEdit = false
		this.getCurrentUser = this.getCurrentUser.bind(this)
	}

	componentDidMount() {
		this.getCurrentUser()
	}

	componentDidUpdate(prevProps, nextProps, snapshot) {
		if (prevProps.history.location.pathname !== prevProps.location.pathname) this.getCurrentUser()
	}

	getCurrentUser() {
		this.props.getUser(this.props.match.params.userName)
	}

	render() {
		if (this.props.match.params.userName === this.props.authUser.name) this.displayEdit = true

		return (
			<div className="">
				{ this.props.activeUser ?
					(
						<div>
							<h2>{this.props.activeUser.name}'s Profile</h2>
							{ this.props.activeUser.description &&
								(
									<div>
										Description:
										<p>{this.props.activeUser.description}</p>
									</div>
								)
							}
						</div>
					)
				:
					(
						<div>
							<h4>User not found</h4>
						</div>
					)
				}
				{ this.props.authUser.isLogged && this.displayEdit &&
					(
						<div>
							<button><Link to={`/users/edit/${this.props.match.params.userName}`}>Edit Profile</Link></button>
							<button><Link to={`/users/edit/${this.props.match.params.userName}`}>Delete Profile</Link></button>
						</div>
					)
				}
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		activeUser: state.usersReducer.activeUser,
		authUser: state.authReducer
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getUser: (param) => dispatch(usersActions.getUser(param))
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User))

