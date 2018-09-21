import React, { Component } from 'react';
import GoogleDispatcherMap from './GoogleDispatcherMap/GoogleMap';
import Queing from './Queing/Queing';
import QueDisplay from './Queing/QueDisplay';
import NavBar from './NavBar';
import io from 'socket.io-client';

class Dispatcher extends Component {
	constructor(props){
		super(props);
		this.state = {
			decline: false,
			newAddCoordinates: [],
			locateUser: [],
			requestLocation: [],
			io: null,
			socket: null
		};
	}

	componentWillMount(){
		this.initSocket();
	}

	initSocket = () => {
	   const socket = io(this.state.endpoint);
	   socket.on('connect', (id) => {
	        console.log(`Connected your SOCKET ID is ${socket.id}`);
	        socket.emit('ServiceProvider', this.state.Dispatcher);
   		 });
		   this.setState({socket});
 	}


	handleAddRequest(req){
		let add = this.state.newAddCoordinates;
		add.push(req);
		this.setState({newAddCoordinates: add});
	}

	handleLocateUser(props){
		this.setState({locateUser: [props]});
	}

	handleDeleteRequest(id){
		let del = this.state.newAddCoordinates;
		let index = del.findIndex(x => x.id === id);
		del.splice(index, 1);
		this.setState({newAddCoordinates: del});
		this.state.socket.emit('decline', this.state.decline);
	}



	render(){
		return (
			<div className="Dispatcher">
				<header><NavBar/></header>
				<div style={{paddingTop: '56px'}}>
					<GoogleDispatcherMap locateUserReq={this.state.locateUser}/>
				</div>
				<Queing addUserLocation={this.handleAddRequest.bind(this)}/>
				<QueDisplay onDelete={this.handleDeleteRequest.bind(this)} locateUser={this.handleLocateUser.bind(this)} coordinates={this.state.newAddCoordinates}/>
			</div>
		);
	}
}

export default Dispatcher;