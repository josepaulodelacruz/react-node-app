import React, { Component } from 'react';
import { Dialog, DialogActions, Button, DialogTitle, DialogContent} from 'react-mdl';
import './Queing.css';


class QueDisplay extends Component {
	state = {
		click: false,
		openDialog: false,
		acceptRequest: []
	}

	handleClick(userRequest){
		this.props.locateUser(userRequest);
	}

	handleDelete = (id) => {
		this.props.onDelete(id);
	}


	HandleAcceptRequest(){
		this.setState({openDialog: true});
	}

	handleClose(){
		this.setState({openDialog: false});
	}

	handleDeploy(id){
		this.props.deployment(id);
		this.setState({openDialog: false});
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
					<h3 style={{color: 'blue',fontSize: '20px', margin: '5px'}} onClick={this.HandleAcceptRequest.bind(this)}>✔</h3>
					<h3 style={{color: 'red', fontSize: '20px', margin: '5px'}}>📧</h3>
					<h3 style={{color: 'red', fontSize: '20px', margin: '5px'}} onClick={this.handleDelete.bind(this, userRequest.id)}>✘</h3>
				</div>
			</div>
			<div>
		        <Dialog open={this.state.openDialog}>
		          <DialogTitle style={{margin: '0px'}}>Tricycle Deployment Information</DialogTitle>
		          <DialogContent>
		          	<form style={{margin: 'auto'}}>
		          	<div style={{display: 'grid', justifyContent: 'center'}}>
		          		<h3 style={{textAlign: 'center'}}>Conduction Sticker</h3>
		            	<input style={{fontSize: '18px', textAlign: 'center', margin: 'auto', height: '40px'}} type="text" ref="sticker"/>
		          	</div>
		          	<div style={{display: 'grid', justifyContent: 'center'}}>
		          		<h3 style={{textAlign: 'center'}}>Plate Number</h3>
		            	<h3 style={{fontSize: '18px', textAlign: 'center', margin: 'auto', height: '40px'}} type="text" ref="plateNumber"></h3>
		          	</div>
		          	<div style={{display: 'grid', justifyContent: 'center', marginTop: '10px'}}>
		          		<h3 style={{textAlign: 'center',  margin: '0px'}}>Operator's Contact</h3>
		            	<h3>Contact #:09123456789</h3>
		          	</div>			          			
		          	</form>
		          </DialogContent>
		        	 <button type="button" onClick={this.handleDeploy.bind(this, userRequest.id)}>Deploy</button>
		        	 <button type="button" onClick={this.handleClose.bind(this)}>Cancel</button>
		        </Dialog>
		      </div>
			</section>
			)
		});
		return (
			<div>
				{userRequests}
			</div>
		)
	}
}


export default QueDisplay;