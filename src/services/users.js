import { authHeader } from '../helpers/authHeader'

//Get all Users
function getAllUsers() {
	// let promise = new Promise((resolve, reject) => {
		const requestOptions = {
	        method: 	'GET',
	        headers: 	{ 'Content-Type': 'application/x-www-form-urlencoded' }
	    };

	    // fetch('http://127.0.0.1:8000/api/users', requestOptions)
	    // 	.then(response => {
	    // 		console.log(response)
	    // 	})

	    return fetch('http://127.0.0.1:8000/api/users', requestOptions)
	    	.then(response => response.json().then(body => {
	    		if (!response.ok) {
		          // If request was failed, dispatching FAILURE action.
		          return({status:false, msg: body.error, value: "Error getting all users"})
		        } else {
		          // When everything is ok, dispatching SUCCESS action.
		          return({status:true, value: body})
		        }
	    	}))
	// })
	
	// return promise
}

//Crate a new User
function newUser(user) {
	let promise = new Promise((resolve, reject) => {
		let body = JSON.stringify(user)
		const requestOptions = {
			method: 	'POST',
			headers: 	{ 'Content-Type': 'application/json' },
			body: 		body
		}
		
		fetch('http://127.0.0.1:8000/api/users', requestOptions)
			.then(response => response.json().then(body => ({ response, body })))
		  	.then(({ response, body }) => {
		        if (!response.ok) {
		        	//handle errors
					reject({status:false, msg: body.error, value: "Register wrong"})
		        } else {
					resolve({status:true, value: body})
		        }
		    });

	})
	
	return promise
}

//Get 1 User Info
function getUser(user) {

	const requestOptions = {
		method: 	'GET',
		headers: 	{ 'Content-Type': 'application/x-www-form-urlencoded' },
	}

	return fetch(`http://127.0.0.1:8000/api/users/${user}`, requestOptions)
    	.then(response => response.json().then(body => {
    		if (!response.ok) {
	          // If request was failed, dispatching FAILURE action.
	          return({status:false, msg: body.error, value: "Error getting the user"})
	        } else {
	          // When everything is ok, dispatching SUCCESS action.
	          return({status:true, value: body})
	        }
    	}))
}

//Update user info
function modUser(user, token) {

	let body = JSON.stringify(user)
	const requestOptions = {
		method: 	'PUT',
		headers: 	{ 
						'Content-Type': 'application/json',
						'x-access-token': token
					},
		body: 		body
	}

	return fetch(`http://127.0.0.1:8000/api/users/${user}`, requestOptions)
    	.then(response => response.json().then(body => {
    		if (!response.ok) {
	          // If request was failed, dispatching FAILURE action.
	          return({status:false, msg: body.error, value: "Error updating the info"})
	        } else {
	          // When everything is ok, dispatching SUCCESS action.
	          return({status:true, value: body})
	        }
    	}))
}

const usersServices = {
	newUser,
	getAllUsers,
	getUser,
	modUser
}

export default usersServices

