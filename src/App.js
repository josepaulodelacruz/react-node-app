import React, { Component } from 'react';
import Toolbar from './Components/Toolbar/Toolbar';
import SideDrawer from './Components/SideDrawer/SideDrawer';
import Backdrop from './Components/Backdrop/Backdrop';
import './App.css';
import io from 'socket.io-client';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      endpoint: "http://192.168.0.27:5000",
      SideDrawerOpen: false,
      response: '',
      socket: null
    };
  }

  componentWillMount(){
    this.initSocket()
  };

 initSocket = () => {
   const socket = io(this.state.endpoint);
   socket.on('connection', () => {
        console.log('Connected');
   })
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

  handleClick(){
    console.log('click');
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
          <div className="content" style={{paddingTop: '70px'}}>
            <h2>{this.state.response}</h2>
            <button onClick={this.handleClick}>Click</button>
          </div>
      </div>

    );
  }
}

export default App;
