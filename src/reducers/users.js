import usersConstants from '../constants/users'

const init_state = {
	items : 		[],
	isFetching: 	false,
	error: 			null,
	activeUser: 	null
}

const usersReducer = (state = init_state, action) => {
	switch (action.type) {
		case usersConstants.GET_ALL_SUCCESS : 
			return {
				...state,
				items: action.value
			}
		case usersConstants.GET_ALL_FAILURE : 
			return {
				...state,
				items: null,
				error: action.value
			}
		case usersConstants.REGISTER_SUCCESS:
			return {
				...state
			}
		case usersConstants.REGISTER_FAILURE:
		 	return {
		 		...state
		 	}
		case usersConstants.GET_USER_SUCCESS:
			return {
				...state,
				activeUser: action.value
			}
		case usersConstants.GET_USER_FAILURE:
			return {
				...state,
				activeUser: null,
				error: action.value
			}
		case usersConstants.UPDATE_USER_SUCCESS:
			return {
				...state
			}
		case usersConstants.UPDATE_USER_FAILURE:
			return {
				...state,
				error: action.value
			}
		default:
			return state
	}

}

export default usersReducer