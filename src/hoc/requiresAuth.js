import React, { Component } from 'react';  
import { connect } from 'react-redux';  
import { withRouter } from 'react-router-dom'
import { push } from 'connected-react-router';

export default function (ComposedComponent) {  
	class Authenticate extends Component {

		componentDidMount() {
			this._checkAndRedirect();
		}

		componentDidUpdate() {
			this._checkAndRedirect();
		}

		_checkAndRedirect() {
			const { isLogged, redirect } = this.props;

			if (!isLogged) {
				redirect();
			}
		}

		render() {
			//@TODO: maybe handle here the error?
			return (
				<div>
					{ this.props.isLogged ? <ComposedComponent {...this.props} /> : null }
				</div>
			);
		}
	}

	const mapStateToProps = (state, ownProps) => {
		return {
			isLogged: state.authReducer.isLogged
		}
	}

	const mapDispatchToProps = (dispatch) => {
		return {
			// getUser: (param) => dispatch(usersActions.getUser(param))
			redirect: () => dispatch(push('/')) //@TODO: redirect to /404 page or handle here
		}
	}

	return withRouter(connect(mapStateToProps, mapDispatchToProps)(Authenticate));
}