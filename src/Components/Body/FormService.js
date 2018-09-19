import React, { Component } from 'react';
import './FormServices.css';
class FormService extends Component {
	constructor(props){
		super(props);
		this.state = {
			formClient: {
				location: '',
				address: '',
				latitude: 0,
				longitude: 0
			}
		};
	}

	static defaultProps = {
		destinations: ['None', 'Dita', 'Cabuyao Bayan', 'Balibago', 'Complex', 'Sala']
	};

	handleChange = (props) => {
			if(this.refs.destination.value === 'Dita'){
				this.setState({formClient: {
					latitude: 14.2807631,
					longitude: 121.1119431,
					location: this.refs.location.value,
					address: this.refs.destination.value,
				}},function(){
					this.props.currentLocation(this.state.formClient);
				})	
			}else if(this.refs.destination.value === 'Cabuyao Bayan'){
				this.setState({formClient: {
					latitude: 14.276979,
					longitude: 121.1224578,
					location: this.refs.location.value,
					address: this.refs.destination.value,
				}},function(){
					this.props.currentLocation(this.state.formClient);
				})
			}else if(this.refs.destination.value === 'Balibago'){
				this.setState({formClient: {
					latitude: 14.2956901,
					longitude: 121.1061841,
					location: this.refs.location.value,
					address: this.refs.destination.value,
				}},function(){
					this.props.currentLocation(this.state.formClient);
				})
			}else if(this.refs.destination.value === 'Complex'){
				this.setState({formClient: {
					latitude: 14.293717,
					longitude: 121.1027488,
					location: this.refs.location.value,
					address: this.refs.destination.value,
				}},function(){
					this.props.currentLocation(this.state.formClient);
				})
			}
			else if(this.refs.destination.value === 'Sala'){
				this.setState({formClient: {
					latitude: 14.272312,
					longitude: 121.1221503,
					location: this.refs.location.value,
					address: this.refs.destination.value,
				}},function(){
					this.props.currentLocation(this.state.formClient);
				})
			}else if(this.refs.destination.value === 'None'){
				this.setState({formClient: {
					latitude: 0,
					longitude: 0,
					location: this.refs.location.value,
					address: this.refs.destination.value,
				}},function(){
					this.props.currentLocation(this.state.formClient);
				})
			}
			
		
	}
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
					<select onChange={this.handleChange.bind(this)} ref="destination">{destinations}</select>
					<label>Estimated KM</label>
					<label>4km</label>
					<h3>₱ 50.00</h3>
				</form>
			</div>
		);
	}
}

export default FormService;