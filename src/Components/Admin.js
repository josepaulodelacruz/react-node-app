import React, { Component } from 'react';
import uuid from 'uuid';

class Admin extends Component {
	constructor(){
		super();
		this.state = {
			adminUser: []
		}
	}

	componentWillMount(){
		this.setState({adminUser: [
			{
				id: uuid.v4(),
				username: this.refs.username.value,
				password: this.refs.password.value
			}
		]}, function(){
			console.log(this.state.adminUser);
		})
	}
	render(){
		return (
			<div className="Admin">
				<h3>Admin</h3>
				<form>
					<div>
						<label>Username:</label><br/>
						<input type="text" ref="username"/>
					</div>
					<div>
						<label>Password:</label><br/>
						<input type="password" ref="username"/>
					</div>
					<div>
						<label>Email:</label><br/>
						<input type="text" ref="username"/>
					</div>
				</form>
			</div>
		);
	}
}

export default Admin;