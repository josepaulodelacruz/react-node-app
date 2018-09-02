import React, { Component } from 'react';
import './FormServices.css';
class FormService extends Component {
	static defaultProps = {
		destinations: ['Dita', 'Cabuyao Bayan', 'Balibago', 'Complex', 'Sala']
	};
	render(){
		let destinations = this.props.destinations.map(destination => {
			return <option key={destination} ref={destination}>{destination}</option>;
		})
		return (
			<div className="bg-body">
				<form className="display-data">
					<label>Current Location</label>
					<input type="text" ref="location" placeholder="BLK 24 LOT 18"/>
					<label>Destination</label>
					<select>{destinations}</select>
					<label>Estimated KM</label>
					<label>4km</label>
					<h3>₱ 50.00</h3>
				</form>
			</div>
		);
	}
}

export default FormService;