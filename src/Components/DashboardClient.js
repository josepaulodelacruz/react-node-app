import React, { Component } from 'react';
import GoogleMap from './GoogleMap/GoogleMap';
import FormService from './Body/FormService';
import NavBar from './NavBar';
import './GoogleMap/MarkerStyle.css';
import io from 'socket.io-client';

let request = 0;
class DashboardClient extends Component {
  constructor(props){
    super(props);
    this.state = {
      coordinates: [],
      // endpoint: "http://192.168.0.14:5000",
      // endpoint: "http://localhost:5000",
      Client: 'Client',
      SideDrawerOpen: false,
      response: '',
      socket: null,
      button: false,
      io: null,
      latitude: 0,
      longitude: 0,
      desireLocation: ''
    };
  }

  componentWillMount(){
  	this.initSocket();
  }

// Server Communication client-to-server
 initSocket = () => {
   const socket = io(this.state.endpoint);
   socket.on('connect', (id, Client) => {
        console.log(`Connected your SOCKET ID is ${socket.id}`);
        socket.emit('User', this.state.Client);
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


  RenderCoordinates = (props) => {
     this.setState({latitude: props.latitude});
    this.setState({longitude: props.longitude});
  }


  handleClick = (props) => {
    // if(request < 1){
    let socketId = this.state.socket.id;
    this.state.socket.emit('client', this.state.latitude, this.state.longitude, socketId, this.state.desireLocation, this.state.coordinates);
    // request++;
    // }else{
    //   alert('REQUEST LIMIT IS ONLY 1');
    //   return 0;
    // }


  }

  ClientLocation = (props) => {
    this.setState({desireLocation: props.address});
    this.setState({coordinates: [
      {
        lat: props.latitude,
        longi: props.longitude
      }
    ]})
  }

  componentDidMount(){
    this.state.socket.on('declinedReceive', id => {
      alert('Your Request Has Been Decline');
    })

    this.state.socket.on('AcceptRequest', id => {
      alert('Your Request has been accepted');
    });
  } 


  render() {
    return (
      <div>
        <NavBar/>
          <div className="content" style={{paddingTop: '50px'}}>
              {/*Displaying Map from the main component*/}
              <GoogleMap ClientCoords={this.RenderCoordinates} destination={this.state.coordinates}/>
          </div>
            <FormService currentLocation={this.ClientLocation}/>
          <div className="btn-request">
             <button onClick={this.handleClick}>REQUEST</button> 
          </div>
      </div>        
    );
  }
}

export default DashboardClient;
