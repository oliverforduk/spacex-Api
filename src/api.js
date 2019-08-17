//Get all (past) launches
const APIURL = 'https://api.spacexdata.com/v3/launches/past/';

//call for all launches and store
export async function getLaunches(numLaunch) {
	//Limit by number requested, set order to descending 
	let apiCall = APIURL + '?order=desc&limit=' + numLaunch;
	return fetch(apiCall)
		.then(res => {
			handleError(res);
			return res.json();
		});
}

//Basic error handling
function handleError(res) {
	if(!res.ok) {
		if(res.status >=400 && res.status < 500) {
			return res.json().then(data => {
				let err = {errorMessage: data.message};
				throw err;
			});
		} else {
			let err = {errorMessage: 'Server issues, please try again.'};
			throw err;
		}
	}
}