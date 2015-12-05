import * as types from '../constants/ActionTypes'

// Here goes all the action creators

export function addTodo(text) {
	return { type: types.ADD_TODO, text }
}
