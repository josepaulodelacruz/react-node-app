import React, { Component } from 'react';
import MapRenderer from './MapRenderer';

class MarkLocation extends Component {
	render(){
		return(
			<div>
				<MapRenderer/>
			</div>
		);
	}
}

export default MarkLocation;

// constructor(props){
// 		super(props);
// 		this.state = {
// 			latitude: 14.2871,
// 			longitude: 121.1167
// 		}
// 	}

	// 	componentWillMount(){
	// 		this.initGeoLocation();
	// 	}

	// 	initGeoLocation = () => {
	// 		this.setState({latitude: this.props.latProp});
	// 		this.setState({longitude: this.props.longProps});
	// 	}

	// latProps={this.props.latProps} longProps={this.props.longProps}