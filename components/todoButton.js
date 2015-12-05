import React, { PropTypes, Component } from 'react';

class TodoButton extends Component {
	render () {
		return (
			<div>
				<input type='text' ref='input' />
				<button
					onClick={(e) => {
						this.handleClick(e)
					}}>
					Add to list
				</button>
			</div>
		)
	}

	handleClick (e) {
		const node = this.refs.input;
		const text = node.value.trim();
		this.props.addTodo(text);
		node.value = '';
	}
};

TodoButton.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default TodoButton;
