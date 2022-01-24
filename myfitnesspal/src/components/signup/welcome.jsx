import React from "react";
import "./welcome.css";

import "./loginpg.jsx"
import { Link, Router, BrowserRouter } from 'react-router-dom'

//import React from "react";
//import "./welcome_nav.css"
export const Welcome = () => {
	return (
		<div className="continue_container">
			<div className="nav_container">
				<div className="nav">
					<div className="btn1">

					<Link to={"/"}>	<button className="myfit">myfitnesspal</button></Link>
					</div>
					<div className="btn1">
						{/* <button className="log" onClick={()=>{

						}}>Login</button> */}
						<Link className="log" style={{textDecoration:"none"}} to="/signup/login">Login</Link>

					</div>
				</div>
			</div>
			<div className="large_div">
				<div className="container">
					<div className="container_bottom">
						<div className="paratext">
							<h2 className="heading">
								Welcome! Just a few quick questions so we can customize
								MyFitnessPal for you.
							</h2>

							{/* <button className="btn">Continue</button> */}
							<Link className="btn" style={{textDecoration:"none"}} to="/signup/weightgoal">Continue</Link>

						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
