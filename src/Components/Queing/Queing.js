import React, { Component } from 'react';
import UserRequest from './UserRequest';
import './Queing.css';


class Queing extends Component {
	render(){
		return (
			<section className="Queing">
				<UserRequest/>
			</section>
		);
	}
}

export default Queing;