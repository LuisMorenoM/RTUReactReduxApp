import { authHeader } from '../helpers/authHeader'


function login(credentials) {
	let body = JSON.stringify(credentials)
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: body
	}

	return fetch('http://127.0.0.1:8000/api/auth/login', requestOptions)
		.then(response => response.json().then(body => ({ response, body })))
	  	.then(({ response, body }) => {
	        if (!response.ok) {
	        	//handle errors
				return({status:false, msg: body.error, value: "Login failed"})
	        } else {
				return({status:true, value: body})
	        }
	    });
}

function logout() {
    // remove user from local storage to log user out
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    };

    return fetch('http://127.0.0.1:8000/api/auth/logout', requestOptions)
    	.then(response => response.json().then(body => {
    		if (!response.ok) {
	          // If request was failed, dispatching FAILURE action.
	          return({status:false, msg: body.error, value: "Error"})
	        } else {
	          // When everything is ok, dispatching SUCCESS action.
	          return({status:true, value: body})
	        }
    	}))
    // localStorage.removeItem('user');
}

const authServices = {
	login,
	logout
}

export default authServices