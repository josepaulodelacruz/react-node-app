import React, { Component } from 'react';
import MarkLocation from './MarkLocation';
// const MAPBOX_TOKEN = 'pk.eyJ1IjoiamV5cGkiLCJhIjoiY2psOWI0MHA1M2ZuejNwcXJ1d2xjbXpiYyJ9.n8oaiL9SWvs1NJpx67_g6w'; 
// Set your mapbox token here
export default class GoogleMap extends Component {
  render() {
    return (
      <MarkLocation location={this.props.location}/>
      );
  }
}

// 