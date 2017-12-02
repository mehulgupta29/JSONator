import {combineReducers} from 'redux'
import todoReducer from './todoReducers'
import userReducer from './userReducers'
import fileReducer from './fileReducers'

const rootReducer = combineReducers({
	todos: todoReducer,
	user: userReducer,
	files: fileReducer
});

export default rootReducer