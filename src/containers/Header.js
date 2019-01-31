import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import authActions from '../actions/auth'

class Header extends Component {

	constructor(props) {
		super(props)

		this.triggerLogout = this.triggerLogout.bind(this)
	}

	componentDidMount() {
	}

	triggerLogout(e) {
		this.props.logout()
	}

	render() {
		return (
			<header className="">
				<div className="authNav">
					{ this.props.authUser.isLogged ?
						(
							<div className="">
								<span>Hola <Link to={`/users/${this.props.authUser.name}`}>{this.props.authUser.name}</Link></span>
								<span style={{marginLeft : 10, color: 'blue'}} onClick={this.triggerLogout}>Logout</span>
							</div>
						)
					:
						(
							<Link to="/login">Login</Link>
						)
					}
					
				</div>
				<div className="menu">
					<Link to="/">Home</Link> | 
					<Link to="/users">Users</Link>
				</div>
			</header>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		authUser: state.authReducer
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		logout: (param) => dispatch(authActions.logout())
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))

