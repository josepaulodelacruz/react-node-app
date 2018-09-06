import React, { Component } from 'react';
import Main from './Main';
import Backdrop from './Backdrop/Backdrop';
import SideDrawer from './SideDrawer/SideDrawer';
import Toolbar from './Toolbar/Toolbar';


class App extends Component {
    constructor(props){
    super(props);
    this.state = {
      // endpoint: "http://192.168.0.14:5000",
      SideDrawerOpen: false,
      button: false,
    };
  }

    drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return{SideDrawerOpen: !prevState.SideDrawerOpen}
    });
  }

  backdropClickHandler = () => {
    this.setState({SideDrawerOpen: false});
  }

  render(){
        let backdrop;
    if(this.state.SideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
    return (
        <div className="App">
          <div style={{height: '100%'}}>
            <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
            <SideDrawer show={this.state.SideDrawerOpen}/>
            {backdrop}
          </div>
        </div>
     );
  }
}

export default App;