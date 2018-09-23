import React, { Component } from 'react';
import Login from './Login';
import { Redirect } from 'react-router-dom';
import uuid from 'uuid';


class UserLogin extends Component {
  constructor(){
    super();
      this.state = {
        user: [],
        comparison: '',
        redirect: false,
        error: false,
        type: '',
        currentLogin: []
    };
  }

  componentWillMount(){
    this.setState({user: [
       {
         id: uuid.v4(),
         username: 'Client',
         password: 'password',
         type: 'Client'
       },
       {
         id: uuid.v4(),
         username: 'Admin',
         password: '123456',
         type: 'Admin'
       },
       {
         id: uuid.v4(),
         username: 'Dispatcher',
         password: '123456',
         type: 'Dispatcher'
       },
    ]})
  }
    
    
    handleSubmitUser(props){
    this.state.user.map(user => {
        if(props.userLogin === user.username && props.passLogin === user.password){
          console.log('sucess');
          this.setState({currentLogin: user});
          this.setState({redirect: true});

        }else {
          this.setState({error: true});
        }
    });
  }

  render(){
    // Conditional Rendering
    if(this.state.redirect){
      if(this.state.currentLogin.type === 'Client'){
        return(
        <Redirect to='/DashboardClient'/>
        );
      }else if(this.state.currentLogin.type === 'Dispatcher'){
        return(
          <Redirect to='/Dispatcher'/>
        );
      }
    }else if (this.state.error){
      alert('Incorrect Username and Password');
    }
    
    return (
        <div className="App">
            <Login userComparison={this.handleSubmitUser.bind(this)}/>
        </div>
     );
  }
}

export default UserLogin;



