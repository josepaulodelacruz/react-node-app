import React, { Component } from 'react';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';
import GoogleMap from './GoogleMap/GoogleMap';
import FormService from './Body/FormService';
import './GoogleMap/MarkerStyle.css';
import io from 'socket.io-client';


class DashboardClient extends Component {
  constructor(props){
    super(props);
    this.state = {
      // endpoint: "http://192.168.0.14:5000",
      SideDrawerOpen: false,
      response: '',
      socket: null,
      button: false,
      io: null
    };
  }

  componentWillMount(){
  	this.initSocket();
  }

// Server Communication client-tos-server
 initSocket = () => {
   const socket = io(this.state.endpoint);
   socket.on('connect', (id) => {
        console.log(`Connected your SOCKET ID is ${socket.id}`);
    });
	   this.setState({socket});
 }	

  componentDidMount(){
    this.callApi()
      .then(res => this.setState({ response: res.express}))
      .catch(err => console.log(err));
  }
  // retrieving data from the back-end server from port 5000
  callApi = async () => {
    const response = await fetch('/api/con');
    const body = await response.json();

    if(response.status !== 200) throw Error(body.message);

    return body;
  }
  // SIDE BAR TOGGLING
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return{SideDrawerOpen: !prevState.SideDrawerOpen}
    });
  }

  backdropClickHandler = () => {
    this.setState({SideDrawerOpen: false});
  }


  handleClick = () => {
    // SENDING AN EVENT TO THE SERVER
  	console.log(`${this.state.socket.id}  REQUEST`);
  	this.state.socket.emit('event', 'click');
    
  }


  render() {
    // Conditional Rendering
    let backdrop;
    if(this.state.SideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
    return (
      <div style={{height: '100%'}}>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
          <SideDrawer show={this.state.SideDrawerOpen}/>
          {backdrop}
          <div className="content" style={{paddingTop: '50px'}}>
              {/*Displaying Map from the main component*/}
              <GoogleMap/>
          </div>
          <FormService/>
          <div className="btn-request">
             <button onClick={this.handleClick}>REQUEST</button> 
          </div>        
      </div>

    );
  }
}

export default DashboardClient;