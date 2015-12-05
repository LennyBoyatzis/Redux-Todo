import React, { PropTypes, Component } from 'react';

class TodoList extends Component {
	render () {
		return (
			<ul>
				{this.props.todos.map((todo, index) => {
					return <li key={index}>{todo.text}</li>
				})}
			</ul>
		)
	}
};

TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string.isRequired,
	}).isRequired).isRequired
}

export default TodoList;
