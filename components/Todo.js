import React, { Component, PropTypes } from 'react';

export default class Todo extends Component {
	render () {
		console.log("this.props.text", this.props.text);
		return (
			<li>
				{this.props.text}
			</li>
		)
	}
};

Todo.propTypes = {
	text: PropTypes.string.isRequired,
};
