import React from 'react';
import UserLogin from './UserLogin';
import SignUp from './SignUp';
import DashboardClient from './DashboardClient';
import { HashRouter,Switch,Route } from 'react-router-dom';


const Main = () => {
	
	return (
	<HashRouter>
		<Switch>
			<Route exact path="/" component={UserLogin}/>
			<Route path="/SignUp" component={SignUp}/>
			<Route path="/DashboardClient" component={DashboardClient}/>
		</Switch>
	</HashRouter>
	);
}

export default Main;