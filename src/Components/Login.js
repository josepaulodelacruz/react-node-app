import React, { Component } from 'react';

class Login extends Component {
	constructor(props){
		super();
		this.state = {
			loginUser: {}
		};
	}
	handleSubmit(e){
		if(this.refs.username.value === '' || this.refs.password.value === ''){
			alert('Complete the fill up form');
		}else{
			this.setState({loginUser: {
				userLogin: this.refs.username.value,
				passLogin: this.refs.password.value
			}},function(){
				this.props.userComparison(this.state.loginUser);
			})
		}
		e.preventDefault();
	}
	render(){
		return (	
			<div>
				<h3>Login</h3>
				<form>
					<div>
						<label>Username</label>
						<input type="text" ref="username"/>
					</div>
					<div>
						<label>Password</label>
						<input type="password" ref="password"/>
					</div>
					<input onClick={this.handleSubmit.bind(this)} type="submit" value="Submit"/>
				</form>

			</div>
		);
	}
}

export default Login;