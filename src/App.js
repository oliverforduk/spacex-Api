import React , {Component} from 'react';
import LaunchForm from './components/LaunchForm';
import LaunchFormButton from './components/LaunchFormButton';
import LaunchRow from './components/LaunchRow';
import * as apiCalls from './api.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: true,
      launches: []
    };
    
    this.getLaunches = this.getLaunches.bind(this);
  }

  //get last requested number of launches
  async getLaunches(numLaunch) {
    let launches = await apiCalls.getLaunches(numLaunch);
    this.setState({launches});
  }

  render() {
    const showForm = this.state.showForm;
    
    //map over launches array and asign to launchrow
    const launchRows = this.state.launches.map((l, ind) =>(
      <LaunchRow 
        // Basic information
        key={ind}
        name={l.rocket.rocket_name}
        flightNo={l.flight_number}
        date={l.launch_date_local}
        outcome={l.launch_success}
        missionPatch={l.links.mission_patch_small}
        //more details
        launchDetails={l.details}
        launchSite={l.launch_site.site_name_long}
        rocketId={l.rocket.rocket_id}
      />
    ));

    return (
      <div class="app-body">
        {showForm ?
          <LaunchForm
            onLaunch={this.getLaunches}
            onClose={() => this.setState({showForm: false})}
          />
          :
          <LaunchFormButton open={() => this.setState({showForm: true, launches: []})} />
        }
         
        {launchRows}
      </div>
    );
  }
}

export default App;