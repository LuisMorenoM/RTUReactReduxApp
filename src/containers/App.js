import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import authActions from '../actions/auth'
import usersActions from '../actions/users'

import './App.css';

class App extends Component {

	constructor(props) {
		super(props)

	    // const { match } = this.props
	    //this.handleClick = this.handleClick.bind(this);
	    //onClick={this.handleClick}
	    this.triggerLogin = this.triggerLogin.bind(this)
	}

	componentDidMount() {
	}

	triggerLogin(name) {

	}

	render() {
		return (
			<div className="">
				<h2>MER/RN Base App</h2>
				<div>
					<h4>Stack:</h4>
					<ul>
						<li>Mongo + Mongoose</li>
						<li>Nodejs + ExpressJs</li>
						<li>React + Redux</li>
					</ul>
				</div>
			</div>
			);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		authUser: state.authReducer,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

