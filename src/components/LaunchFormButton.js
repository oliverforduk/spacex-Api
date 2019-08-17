import React, {Component} from 'react';
import './LaunchForm.css';

//opens launch form
export default class LaunchFormButton extends Component {
	static defaultProps = {
		open() {}
	}

	render() {
		return (
			<div class="launch-form">
				<button onClick={() => this.props.open()}>Options</button>
			</div>
		);
	}
}