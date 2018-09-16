import React, { Component } from 'react';
import ReactMapboxGl, {Marker} from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiamV5cGkiLCJhIjoiY2psOWI0MHA1M2ZuejNwcXJ1d2xjbXpiYyJ9.n8oaiL9SWvs1NJpx67_g6w'
});

class MapRenderer extends Component {
	constructor(){
		super();
		this.state = {
			coordinates: {
				latitude: 14.2871,
				longitude: 121.116
			}
		}
	}

	render(){
		let Users = this.props.locateUserReq.map(User => {
			return(
			<Marker key={User.id} coordinates={[User.longitude, User.latitude]} anchor="bottom">
	          <div className="mapMarkerStyle"/>
	        </Marker>
			);
		})
		return(
			<Map
	        style="mapbox://styles/mapbox/dark-v9"
	        containerStyle={{
	          height: "calc(100vh - 250px)",
	          width: "100vw"
	        }}
	        center={[this.state.coordinates.longitude, this.state.coordinates.latitude]}
	        zoom={[11]}>
	        {Users}
  		</Map>
		);
	}		
}

export default MapRenderer;