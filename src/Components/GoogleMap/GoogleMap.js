import React, { Component } from 'react';
import MapGL from 'react-map-gl';
import Geolocation from './Geolocation';


const MAPBOX_TOKEN = 'pk.eyJ1IjoiamV5cGkiLCJhIjoiY2psOWI0MHA1M2ZuejNwcXJ1d2xjbXpiYyJ9.n8oaiL9SWvs1NJpx67_g6w'; // Set your mapbox token here

export default class GoogleMap extends Component {

  state = {
    viewport: {
      latitude: 14.2871,
      longitude: 121.1167,
      zoom: 16,
      bearing: 0,
      pitch: 0,
      width: 500,
      height: 500
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



  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();

  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }


  _resize = () => {
    this.setState({
    viewport: {
    ...this.state.viewport,
    width: this.props.width || window.innerWidth,
    height: 300,   
        }
    }); 
  };

  _onViewportChange = viewport => this.setState({viewport});

  render() {
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

    const {viewport, settings} = this.state;
    return (
      <MapGL
        {...viewport}
        {...settings}
        showUserLocation={true}  
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={this._onViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        ><div className="map" style={{padding: '150px'}}>
           <Geolocation/>
        </div>

      </MapGL>

    );
  }
}