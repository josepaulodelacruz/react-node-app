import React, { Component } from 'react';
import GoogleDispatcherMap from './GoogleDispatcherMap/GoogleMap';
import NavBar from './NavBar';
import io from 'socket.io-client';

class Dispatcher extends Component {
	constructor(props){
		super(props);
		this.state = {
			// endpoint: "http://192.168.0.15:5000",
			io: null,
			socket: null,
			Dispatcher: 'Dispatcher',
			coordinates: [
				{
					latitude: 14.2323,
					longitude: 121.122323
				}
			]
		};
	}

	componentWillMount(){
		this.initSocket();
	}


	// Server Communication Dispatcher-to-server
	 initSocket = () => {
	   const socket = io(this.state.endpoint);
	   socket.on('connect', (id) => {
	        console.log(`Connected your SOCKET ID is ${socket.id}`);
	        socket.emit('ServiceProvider', this.state.Dispatcher);
	    });
		   this.setState({socket});
	 	}


	render(){
		const socket = io(this.state.endpoint);
		socket.on('pass', (latitude, longitude) => {
			this.setState({coordinates: [
					{
						latitude: latitude,
						longitude: longitude
					}
				]
			});

		}) 	 	 	 	
		return (
			<div className="Dispatcher">
				<header><NavBar/></header>
				<div style={{paddingTop: '56px'}}>
					<GoogleDispatcherMap location={this.state.coordinates}/>
				</div>
				<h3>{this.state.latitude}</h3>
			</div>
		);
	}
}

export default Dispatcher;