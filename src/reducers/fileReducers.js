import Constants from '../constants/appConstants'
import { findIndex, concat } from 'lodash'

let fileReducer = function (files = {}, action) {
	switch (action.type) {
		case Constants.REDUX.ADD_FILE:

			if(findIndex(files, {fileName: action.payload.fileName}) === -1) { // If file is not already present in the store, then add it
				files = concat(files, action.payload);
			}
			return files;

			// return [action.payload, ...files];

			// return [{
			// 	text: action.text,
			// 	completed: false,
			// 	id: Guid.raw()
			// }, ...todos];

		// case 'COMPLETE_TODO':
		// 	return todos.map((todo) => {
		// 		return todo.id === action.id ?
		// 			Object.assign({}, todo, {completed: !todo.completed}) : todo
		// 	});
		// case 'DELETE_TODO':
		// 	return todos.filter((todo) => {
		// 		return todo.id !== action.id
		// 	});
		default:
			return files;
	}
};

export default fileReducer