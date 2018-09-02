import React, { Component } from 'react';
import ReactMapboxGl, {Marker} from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiamV5cGkiLCJhIjoiY2psOWI0MHA1M2ZuejNwcXJ1d2xjbXpiYyJ9.n8oaiL9SWvs1NJpx67_g6w'
});

class MapRenderer extends Component {
	render(){
		return (
		 <Map
	        style="mapbox://styles/mapbox/dark-v9"
	        containerStyle={{
	          height: "calc(100vh - 250px)",
	          width: "100vw"
	        }}
	        center={[this.props.longProps, this.props.latProps]}
	        zoom={[15]}>
	        <Marker coordinates={[this.props.longProps, this.props.latProps]} anchor="bottom">
	          <div className="mapMarkerStyle" onClick={this.handleClick} />
	        </Marker>
      	</Map>
		);
	}
}

export default MapRenderer;