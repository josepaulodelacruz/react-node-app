import React, { Component } from 'react';
import MarkLocation from './MarkLocation';
// const MAPBOX_TOKEN = 'pk.eyJ1IjoiamV5cGkiLCJhIjoiY2psOWI0MHA1M2ZuejNwcXJ1d2xjbXpiYyJ9.n8oaiL9SWvs1NJpx67_g6w'; 
// Set your mapbox token here
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

    componentWillMount(){
      this.geoLocate();
    }

    geoLocate = () => {
       if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
         this.setState({
           viewport: {
             ...this.state.viewport,
             latitude: position.coords.latitude,
             longitude: position.coords.longitude
           }
         },function(){
           this.props.ClientCoords(this.state.viewport);
         })
      })
      }
    }

  
  render() {
    return (
      <MarkLocation coordinates={this.state.viewport}/>
    );
  }
}