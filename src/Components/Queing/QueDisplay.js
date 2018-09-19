import React, { Component } from 'react';
import './Queing.css';

class QueDisplay extends Component {

	handleClick(userRequest){
		this.props.locateUser(userRequest);
	}

	handleAccept = () => {
		console.log('click');
	}

	render(){
		let userRequests = this.props.coordinates.map(userRequest => {
			return (
				<section onClick={this.handleClick.bind(this, userRequest)} className="Queing" key={userRequest.id}>
				<div className="user-info">
				<div className="profile-pic"></div>
				<div className="userInfo-text">
					<strong>ID: {userRequest.id}</strong>
					<p>Location: Blk 24 Lot 18 </p>
					<p>Destination: {userRequest.desireLocation}</p>
					<p>Estimated Payment: </p>	
					<p>Time: </p>	
				</div>
				<div className="btn-ui">
					<h3 style={{color: 'blue',fontSize: '20px', margin: '5px'}} onClick={this.handleAccept.bind(this)}>✔</h3>
					<h3 style={{color: 'red', fontSize: '20px', margin: '5px'}}>📧</h3>
					<h3 style={{color: 'red', fontSize: '20px', margin: '5px'}}>✘</h3>
				</div>
			</div>
			</section>
			);
		});
		return (
			<div>{userRequests}</div>
		);
	}
}

export default QueDisplay;