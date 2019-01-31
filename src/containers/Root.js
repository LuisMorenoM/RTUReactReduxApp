import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router' // react-router v4
import { ConnectedRouter } from 'connected-react-router'
import { Link } from 'react-router-dom';

// HOC
import requireAuth from '../hoc/requiresAuth'; //isLogged

// Containers
import Header from './Header'
import App from './App'
import Login from './Login'
import Signup from './Signup'
import Users from './Users'
import User from './User'
import EditUser from './EditUser'

const Root = ({history}) => (
	<ConnectedRouter history={history}>
		<div>
			<div>
				<Header />
			</div>
			<Switch>
				<Route exact path="/" component={App} />
				<Route path="/login" component={Login} />
				<Route path="/signup" component={Signup} />
				<Route path="/users" 
					render={ ({ match }) => (
						<div>
							<Route exact path={`${match.url}/`} component={Users} />
							<Route exact path={`${match.url}/:userName`} component={User} />
							<Route exact path={`${match.url}/edit/:userName`} component={requireAuth(EditUser)} />
						</div>
					)}
				/>
			</Switch>
			<div>
				footer
			</div>
		</div>
	</ConnectedRouter>
)

// Root.propTypes = {
//   store: PropTypes.object.isRequired,
// }

export default Root