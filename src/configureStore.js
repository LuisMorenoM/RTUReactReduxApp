import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers'

import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory()

const middleware = [
	routerMiddleware(history),
	thunk
]

if (process.env.NODE_ENV !== 'production') {
	middleware.push(createLogger())
}

export const store = createStore(
	reducer(history),
	compose(
		applyMiddleware(...middleware)
	)	
)
