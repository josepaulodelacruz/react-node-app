import React, { Component } from 'react';
import io from 'socket.io-client';
import './Queing.css';


class Queing extends Component {
	constructor(props){
		super(props);
		this.state = {
			// endpoint: "http://192.168.0.15:5000",
			io: null,
			socket: null,
			Dispatcher: 'Dispatcher',
			coordinates: {},
			newCoordinates: []
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

	 componentWillMount(){
		const socket = io(this.state.endpoint);
		socket.on('pass', (latitude, longitude,socketId, desireLocation) => {
			// console.log(`User id:${socketId}`, `${latitude}`, `${longitude}`, `${desireLocation}`);
			this.setState({coordinates: 
					{
						id: socketId,
						latitude: latitude,
						longitude: longitude,
						desireLocation: desireLocation
					}	
			},function(){
				this.props.addUserLocation(this.state.coordinates);
			});
		}) 	
	}


	render(){
		return (
			<div></div>
		);
	}
}

export default Queing;