import React, { Component } from 'react';
import MapRenderer from './MapRenderer';

class MarkLocation extends Component {
	render(){
		console.log(this.props.coordinates);
		return(
			<div>
				<MapRenderer latProps={this.props.coordinates.latitude} longProps={this.props.coordinates.longitude}/>
			</div>
		);
	}
}

export default MarkLocation;