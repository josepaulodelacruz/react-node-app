import React, { Component } from 'react';
import GoogleDispatcherMap from './GoogleDispatcherMap/GoogleMap';
import Queing from './Queing/Queing';
import NavBar from './NavBar';

class Dispatcher extends Component {
	render(){	 	 	 	
		return (
			<div className="Dispatcher">
				<header><NavBar/></header>
				<div style={{paddingTop: '56px'}}>
					<GoogleDispatcherMap/>
				</div>
				<Queing/>
			</div>
		);
	}
}

export default Dispatcher;