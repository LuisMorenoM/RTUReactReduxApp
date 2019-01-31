import { push } from 'connected-react-router'

import usersConstants from '../constants/users'
import usersServices from '../services/users'

const getAllUsers = params => {
	return dispatch => {
		// const requestOptions = {
	 //        method: 'GET',
	 //        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	 //    };

	 //    fetch('http://127.0.0.1:8000/api/users', requestOptions)
	 //    	.then(response => response.json().then(body => ({ response, body })))
	 //      	.then(({ response, body }) => {
		//         if (!response.ok) {
		//           // If request was failed, dispatching FAILURE action.
		//           	dispatch({
		// 			  type: usersConstants.GET_ALL_FAILURE,
		// 			  value: body.error
		// 			})
		//         } else {
		//           // When everything is ok, dispatching SUCCESS action.
		//           	dispatch({
		// 			  type: usersConstants.GET_ALL_SUCCESS,
		// 			  value: body
		// 			})
		//         }
		//       });
		usersServices.getAllUsers().then(res => {
			if (res.status) {
				dispatch({
				  type: usersConstants.GET_ALL_SUCCESS,
				  value: res.value
				})
			} else {
				dispatch({
					type: usersConstants.GET_ALL_FAILURE,
					value: res.value
				})
			}
		})

	}
	
}

const newUser = user => {
	return dispatch => {
		//request
		usersServices.newUser(user).then( res => {
			if (res.status) {
				dispatch({
				  type: usersConstants.REGISTER_SUCCESS,
				  value: res.value
				})
				dispatch(push('/'))
			} else {
				dispatch({
					type: usersConstants.REGISTER_FAILURE,
					value: res.value
				})
			}
		})
	}
}

const getUser = user => {
	return dispatch => {
		usersServices.getUser(user).then(res => {
			if (res.status) {
				dispatch({
				  type: usersConstants.GET_USER_SUCCESS,
				  value: res.value
				})
			} else {
				dispatch({
					type: usersConstants.GET_USER_FAILURE,
					value: res.value
				})
			}
		})

	}
}

const modUser = user => {
	return dispatch => {
		let token = JSON.parse(localStorage.getItem('auth')).token
		//request
		usersServices.modUser(user, token).then( res => {
			console.log("bien en las acciones ->",res)
			if (res.status) {
				dispatch({
				  type: usersConstants.UPDATE_USER_SUCCESS,
				  value: res.value
				})
				dispatch(push('/'))
			} else {
				dispatch({
					type: usersConstants.UPDATE_USER_FAILURE,
					value: res.value
				})
			}
		})
	}
}

const usersActions = {
	getAllUsers,
	newUser,
	getUser,
	modUser
}

export default usersActions