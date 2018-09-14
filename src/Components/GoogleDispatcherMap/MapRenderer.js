import React, { Component } from 'react';
import ReactMapboxGl, {Marker} from "react-mapbox-gl";
import io from 'socket.io-client';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiamV5cGkiLCJhIjoiY2psOWI0MHA1M2ZuejNwcXJ1d2xjbXpiYyJ9.n8oaiL9SWvs1NJpx67_g6w'
});

class MapRenderer extends Component {
	constructor(props){
		super(props);
		this.state = {
			// endpoint: "http://192.168.0.15:5000",
			io: null,
			socket: null,
			Dispatcher: 'Dispatcher',
			coordinates:
				{
					latitude: 14.2323,
					longitude: 121.122323
				}
		};
	}

	componentWillMount(){
		this.initSocket();
	}

	componentWillMount(){
		const socket = io(this.state.endpoint);
		socket.on('pass', (latitude, longitude,socketId) => {
			console.log(`User id:${socketId}`, `${latitude}`, `${longitude}`);
			this.setState({coordinates: 
				{
					latitude: latitude,
					longitude: longitude
				}
			});
		}) 	
	}

	 initSocket = () => {
	   const socket = io(this.state.endpoint);
	   socket.on('connect', (id) => {
	        console.log(`Connected your SOCKET ID is ${socket.id}`);
	        socket.emit('ServiceProvider', this.state.Dispatcher);
	    });
		   this.setState({socket});
	 	}

	render(){
		return (
		 <Map
	        style="mapbox://styles/mapbox/dark-v9"
	        containerStyle={{
	          height: "calc(100vh - 250px)",
	          width: "100vw"
	        }}
	        center={[this.state.coordinates.longitude, this.state.coordinates.latitude]}
	        zoom={[15]}>
	         <Marker coordinates={[this.state.coordinates.longitude, this.state.coordinates.latitude]} anchor="bottom">
	          <div className="mapMarkerStyle"/>
	        </Marker>
      	</Map>
		);
	}
}

export default MapRenderer;