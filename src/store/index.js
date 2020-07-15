import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'

import products from './reducers/Products'

const reducers = combineReducers({
    products,
})

const store = createStore(reducers, compose(applyMiddleware(thunk)))

export default store