import React, {Component} from 'react';
import './LaunchRow.css';

export default class LaunchRow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			moreInfo: false
		}
	}
	render() {
		const {name, flightNo, date, outcome, missionPatch, launchSite, launchDetails, rocketId} = this.props;
		const moreInfo = this.state.moreInfo
		//Outcome will be null for tbd flight, true for success/false for failure
		let launchOutcome
		if(outcome !== null) {
			if(outcome === true) {
				launchOutcome = "Successful";
			} else {
				launchOutcome = "Failure";
			}
		} else {
			launchOutcome = "Pending";
		}
		
		return (
		<div class="launch-row">
			{missionPatch &&
				<img src={missionPatch} alt="patch"/> 
			}
			<div class="details">
			<p class="title">{name}</p>
			<p>Flight number: {flightNo}</p>
			<p>Launched on: {date}</p>
			<p>Launch outcome: {launchOutcome}</p>
			</div>
			{moreInfo ?
				<div class="more-info">
					<p>Rocket id: {rocketId}</p>
					<p>Rocket name: {name}</p>
					<p>Launch site: {launchSite}</p>
					<p>Launch details: {launchDetails}</p>
					<button onClick={() => this.setState({moreInfo: false})}>ok, LESS Info</button>
				</div>
				:
				<button onClick={() => this.setState({moreInfo: true})}>More Info</button>
			}
			
		</div>
	);
	}
}