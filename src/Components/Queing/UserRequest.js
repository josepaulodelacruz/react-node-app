import React, { Component } from 'react';

class UserRequest extends Component	{
	render(){
		return(
			<div className="user-info">
				<div className="profile-pic"></div>
				<div className="userInfo-text">
					<strong>User ID: Dela Cruz </strong>
					<p>Location: Blk 24 Lot 18 </p>
					<p>Destination: </p>
					<p>Estimated Payment: </p>	
					<p>Time: </p>	
				</div>
				<div className="btn-ui">
					<h3 style={{color: 'blue',fontSize: '20px', margin: '5px'}}>✔</h3>
					<h3 style={{color: 'red', fontSize: '20px', margin: '5px'}}>📧</h3>
					<h3 style={{color: 'red', fontSize: '20px', margin: '5px'}}>✘</h3>
				</div>
			</div>
		)
	}
}

export default UserRequest;