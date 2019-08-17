import React, {Component} from 'react';
import './LaunchForm.css';

export default class LaunchForm extends Component {
	static defaultProps = {
		onLaunch() {},
		onClose() {}
	}
	constructor(props) {
		super(props);
		this.state = {
			numLaunch: 10
		}
		
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	//update numLaunch with user input
	handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  //get request number of launches and close component
  handleSubmit() {
  	this.props.onLaunch(this.state.numLaunch);
  	this.props.onClose()
  }

	render() {
		const {numLaunch} = this.state;
		return (
			<div class="launch-form">
				<p class="title">Show me the last</p>
				<input
					name="numLaunch"
					value={numLaunch}
					onChange={this.handleChange}
					type="number"
				/>
				<p>launches</p>
				<button onClick={this.handleSubmit}>Launch</button>
			</div>
		);
	}
}