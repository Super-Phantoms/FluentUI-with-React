import React from 'react'
import Navigation from './Navigation'
import Dashbord from './components/Dashbord'
import TopNavBar from './TopNavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'office-ui-fabric-react/dist/css/fabric.css'
import './App.css'

function App(){
return (
		<>
			{/* Top Header */}
			<TopNavBar />
			<div className="ms-Grid" dir="ltr">
				<div className="ms-Grid-row">
					<div className="ms-Grid-col ms-sm-1 ms-xl2">
						{/* Left bar */}
						<Navigation />
					</div>
					<div className="ms-Grid-col ms-sm11 ms-xl10 main-element">
						<Router>
							<Switch>
								<Route exact path="/">
									<Dashbord />
								</Route>
								<Route exact path="/statistics">
									{/* Call Page main component */}
								</Route>
								<Route exact path="/project">
									{/* Call Page main component */}
								</Route>
								<Route exact path="/setting">
									{/* Call Page main component */}
								</Route>
							</Switch>
						</Router>
					</div>
				</div>
			</div>
		</>
	)
}
export default App