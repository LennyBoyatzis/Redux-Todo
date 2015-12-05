import { ADD_TODO } from '../constants/ActionTypes';

export default function todos(state = [], action) {
	switch (action.type) {
		case ADD_TODO:
			return [
				...state,
				{
					completed: false,
					text: action.text
				}
			]

		default:
			return state
	}
};
