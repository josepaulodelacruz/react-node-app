import React, { Component } from 'react';
import MapRenderer from './MapRenderer';

class MarkLocation extends Component {
	render(){	
		return(
			<div>
				<MapRenderer destination={this.props.destination} latProps={this.props.coordinates.latitude} longProps={this.props.coordinates.longitude}/>
			</div>
		);
	}
}

export default MarkLocation;