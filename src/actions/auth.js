import { push, goBack } from 'connected-react-router'

import authConstants from '../constants/auth'
import authServices from '../services/auth'

const login = credentials => {
	return dispatch => {
		//request
		authServices.login(credentials).then( res => {
			if (res.status) {
				dispatch({
				  type: authConstants.LOGIN_SUCCESS,
				  value: res.value
				})
				//reset localStorage info
				if (localStorage.getItem('auth')) {
					const userInfo = JSON.parse(localStorage.getItem('auth'))
					localStorage.clear() //localStorage.removeItem('auth')
				}	
				localStorage.setItem('auth', JSON.stringify(res.value));
				dispatch(goBack())
			} else {
				dispatch({
					type: authConstants.LOGIN_FAILURE,
					value: res.value
				})
				localStorage.clear() //localStorage.removeItem('auth');
			}
		})
	}
}

const logout = params => {
	return dispatch => {
		//request
		authServices.logout().then( res => {
			if (res.status) {
				dispatch({
					type: authConstants.LOGOUT_SUCCESS,
					value: res.value
				})
				localStorage.clear() //localStorage.removeItem('auth');
			} else {
				dispatch({
					type: authConstants.LOGOUT_FAILURE
				})
				localStorage.clear() //localStorage.removeItem('auth');
			}
		})
	}
}

const authActions = {
	login,
	logout
}

export default authActions