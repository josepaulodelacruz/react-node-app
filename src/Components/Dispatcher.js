import React, { Component } from 'react';
import GoogleDispatcherMap from './GoogleDispatcherMap/GoogleMap';
import Queing from './Queing/Queing';
import QueDisplay from './Queing/QueDisplay';
import NavBar from './NavBar';

class Dispatcher extends Component {
	constructor(props){
		super(props);
		this.state = {
			newAddCoordinates: [],
			locateUser: []
		};
	}

	handleAddRequest(req){
		let add = this.state.newAddCoordinates;
		add.push(req);
		this.setState({newAddCoordinates: add});
	}

	handleLocateUser(props){
		this.setState({locateUser: [props]});
	}



	render(){
		return (
			<div className="Dispatcher">
				<header><NavBar/></header>
				<div style={{paddingTop: '56px'}}>
					<GoogleDispatcherMap locateUserReq={this.state.locateUser}/>
				</div>
				<Queing addUserLocation={this.handleAddRequest.bind(this)}/>
				<QueDisplay locateUser={this.handleLocateUser.bind(this)} coordinates={this.state.newAddCoordinates}/>
			</div>
		);
	}
}

export default Dispatcher;