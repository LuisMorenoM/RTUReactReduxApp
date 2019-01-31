import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

//import my reducers
import authReducer from './auth'
import usersReducer from './users'

export default (history) => combineReducers({
	//my reducers
	router: connectRouter(history),
	authReducer,
	usersReducer
})