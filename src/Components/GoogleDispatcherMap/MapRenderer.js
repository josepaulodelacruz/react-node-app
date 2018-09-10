import React, { Component } from 'react';
import ReactMapboxGl, {Marker} from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiamV5cGkiLCJhIjoiY2psOWI0MHA1M2ZuejNwcXJ1d2xjbXpiYyJ9.n8oaiL9SWvs1NJpx67_g6w'
});

class MapRenderer extends Component {
	render(){
		let markLocations = this.props.location.map(markLocation => {
			console.log(markLocation.latitude, markLocation.longitude);
			return (
			<Map
		        style="mapbox://styles/mapbox/dark-v9"
		        containerStyle={{
		          height: "calc(100vh - 250px)",
		          width: "100vw"
		        }}
		        center={[markLocation.longitude, markLocation.latitude]}
		        zoom={[15]}
		        key={markLocation}>
		         <Marker key={markLocation} coordinates={[markLocation.longitude, markLocation.latitude]} anchor="bottom">
		          <div className="mapMarkerStyle" onClick={this.handleClick} />
		        </Marker>
  			</Map>
			);
		})
		return (
		 	<div>{markLocations}</div>
		);
	}
}

export default MapRenderer;