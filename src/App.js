import React, { Component } from 'react';
import Toolbar from './Components/Toolbar/Toolbar';
import SideDrawer from './Components/SideDrawer/SideDrawer';
import Backdrop from './Components/Backdrop/Backdrop';
import GoogleMap from './Components/GoogleMap/GoogleMap';
import './App.css';
import io from 'socket.io-client';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      endpoint: "http://192.168.0.15:5000",
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

  callApi = async () => {
    const response = await fetch('/api/con');
    const body = await response.json();

    if(response.status !== 200) throw Error(body.message);

    return body;
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return{SideDrawerOpen: !prevState.SideDrawerOpen}
    });
  }

  backdropClickHandler = () => {
    this.setState({SideDrawerOpen: false});
  }


  handleClick = () => {
  	console.log(this.state.socket.id + 'REQUEST');
  	this.state.socket.emit('event', 'click');
  }



  render() {
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
              <GoogleMap/>
          </div>
           <button onClick={this.handleClick}>REQUEST</button>    
      </div>

    );
  }
}

export default App;
