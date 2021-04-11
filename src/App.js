import React from 'react'
import {
	Switch,
	Route,
} from "react-router-dom";

import Login from './components/Loginform';
import LandingPage from './components/LandingPage';

function App() {
	return (
		<div className='app'>
				<Switch>
					<Route path='/' exact component={Login} />
					<Route path='/landing' exact component={LandingPage} />
				</Switch>
		</div>
	)
}

export default App
