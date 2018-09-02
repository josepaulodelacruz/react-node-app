import React, { Component } from 'react';
import ReactMapboxGl, {Marker} from "react-mapbox-gl";


// const MAPBOX_TOKEN = 'pk.eyJ1IjoiamV5cGkiLCJhIjoiY2psOWI0MHA1M2ZuejNwcXJ1d2xjbXpiYyJ9.n8oaiL9SWvs1NJpx67_g6w'; 
// Set your mapbox token here

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiamV5cGkiLCJhIjoiY2psOWI0MHA1M2ZuejNwcXJ1d2xjbXpiYyJ9.n8oaiL9SWvs1NJpx67_g6w'
});

export default class GoogleMap extends Component {
     state = {
      viewport: {
        latitude: 14.2871,
        longitude: 121.1167,
        zoom: 11,
        bearing: 0,
        pitch: 0,
        width: 0,
        height: 0
      },
      settings: {
        dragPan: true,
        dragRotate: true,
        scrollZoom: true,
        touchZoom: true,
        touchRotate: false,
        keyboard: true,
        doubleClickZoom: true,
        minZoom: 0,
        maxZoom: 20,
        minPitch: 0,
        maxPitch: 85
      }
    }

  render() {
    // Browsers Geolocation function
       if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
         this.setState({
           viewport: {
             ...this.state.viewport,
             latitude: position.coords.latitude,
             longitude: position.coords.longitude
           }
         })
      })
    }

    return (
      // Map rendering
     <Map
        style="mapbox://styles/mapbox/dark-v9"
        containerStyle={{
          height: "calc(100vh - 250px)",
          width: "100vw"
        }}
        center={[this.state.viewport.longitude, this.state.viewport.latitude]}
        zoom={[16]}
      >
        <Marker coordinates={[this.state.viewport.longitude, this.state.viewport.latitude]} anchor="bottom">
          <div className="mapMarkerStyle" onClick={this.handleClick} />
        </Marker>
      </Map>

    );
  }
}