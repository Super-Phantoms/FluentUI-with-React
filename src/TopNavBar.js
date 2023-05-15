import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import Logo from './img/Final-Logo.png'
import profile from './img/indylogix_profile.png'
export default function TopNavBar(){
	return(
		<div className="top-bar">
			<div className="ms-Grid">
				<div className="ms-Grid-row">
					<div style={{display: 'flex', boxShadow: '0px -5px 16px rgb(0 0 0 / 50%)',position: 'relative', zIndex: '99', padding: '10px 17px', width: 'calc(100% - 35px)'}}>
						<div className="s-Grid-col ms-sm2 ms-x2">
							<a href="/"><img src={Logo} alt="Site logo" width="240px" /></a>
						</div>
						<div className="s-Grid-col ms-sm10 ms-x10">
							<Router>
								<ul className="header-menu nav">
									<li className="nav-item">
										<Link to="/statistics" className="nav-link"><i className="nav-link-icon fa fa-database"></i>Statistics</Link>
									</li>
									<li className="btn-group nav-item">
										<Link to="/project" className="nav-link"><i className="nav-link-icon fa fa-edit"></i>Projects</Link>
									</li>
									<li className="dropdown nav-item">
										<Link to="/setting" className="nav-link"><i className="nav-link-icon fa fa-cog"></i>Settings</Link>
									</li>
								</ul>
							</Router>
							<a href="/"><img src={profile} alt="Profile" className="profile_section" /></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}