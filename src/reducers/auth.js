import authConstants from '../constants/auth'

//get info from localStorage
let preUser = {}
if (localStorage.getItem('auth')) {
	preUser = {
		name: 		JSON.parse(localStorage.getItem('auth')).user.name,
		email: 		JSON.parse(localStorage.getItem('auth')).user.email,
		isLogged: 	JSON.parse(localStorage.getItem('auth')).auth
	} 
}

const init_state = {
	name: 		preUser.name 		|| null,
	email: 		preUser.email 		|| null,
	isLogged: 	preUser.isLogged 	|| false
}

const authReducer = (state = init_state, action) => {
	switch (action.type) {
		case authConstants.LOGIN_SUCCESS : 
			return {
				...state,
				name: 		action.value.user.name,
				email: 		action.value.user.email,
				isLogged: 	action.value.auth
			}
		case authConstants.LOGIN_FAILURE : 
			return {
				...state,
				name: 		null,
				email: 		null,
				isLogged: 	false
			}
		case authConstants.LOGOUT_SUCCESS:
			return {
				...state,
				name: 		null,
				email: 		null,
				isLogged: 	false
			}
		case authConstants.LOGOUT_FAILURE:
			return {
				...state,
				name: 		null,
				email: 		null,
				isLogged: 	false
			}
		default:
			return state
	}

}

export default authReducer