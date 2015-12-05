import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todos.js';
import TodoButton from '../components/todoButton';
import TodoList from '../components/todoList';

class App extends Component {
	render () {
		const { dispatch, todos } = this.props;
		return (
			<div>
				<TodoButton
					addTodo={text =>
						dispatch(addTodo(text))
					}/>
				<TodoList
					todos={todos}
					/>
			</div>
		)
	}
}

function select(state) {
	return {
		todos: state.todos,
	}
};

export default connect(select)(App)
