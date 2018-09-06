import React, { Component } from 'react';
import GoogleMap from './GoogleMap/GoogleMap';
import NavBar from './NavBar';

class Dispatcher extends Component {
	render(){
		return (
			<div>
				<div><NavBar/></div>
				<div style={{paddingTop: '56px'}}>
					<GoogleMap/>
				</div>
			</div>
		);
	}
}

export default Dispatcher;