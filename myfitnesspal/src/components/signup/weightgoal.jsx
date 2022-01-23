import React, { useState } from "react";
import "./welcome.css";
import "./weightgoal.css";
import "./welcome.jsx";
import "./activitylevelpage.jsx";
import { Link, Router, BrowserRouter } from 'react-router-dom'
export const LooseWeight = () => {
	const [text, setText] = React.useState("");

	return (
		<div>
			<div className="nav_container">
				<div className="nav">
					<div className="btn1">
						<button className="myfit">myfitnesspal</button>
					</div>
				</div>
			</div>
			<div className="nav1_bottom_div">
				<div className="weight_goal_choose">
					
					<div className="weight_goal_bottom_div">
				    	<p style={{marginBottom:"50px",fontSize:"20px",color:"#222628",fontWeight:"700",lineHeight:"1.2",fontFamily: "Neue Plak UA, Helvetica, Arial, -apple-system, sans-serif"
}} >What is your weight goal?</p>
						<ul className="ul1">
							<li className="li1">
								<div className="weight_type_choose">
									<input className="weight_goal_input"
										type="radio"
										value="1"
										name="radio"
										id="radio1"
										onChange={(e) => setText(e.target.value)}
									/>
									<label className="weight_type_label" for="radio1">Lose Weight</label>
								</div>
							</li>
							<li className="li1">
								<div className="weight_type_choose">
									<input className="weight_goal_input"
										type="radio"
										value="2"
										name="radio"
										id="radio2"
										onChange={(e) => setText(e.target.value)}
									/>
									<label className="weight_type_label" for="radio2">Maintain Weight</label>
								</div>
							</li>
							<li className="li1">
								<div className="weight_type_choose">
									<input className="weight_goal_input" 
										type="radio"
										value="3"
										name="radio"
										id="radio3"
										onChange={(e) => setText(e.target.value)}
									/>
									<label className="weight_type_label" for="radio3">Gain Weight</label>
								</div>
							</li>
						</ul>
						<div className="btn_footer_div_main">
						<Link className="btn_bn_same back_btn_same" style={{textDecoration:"none"}} to="/signup/welcome">Back</Link>
						<Link className="btn_bn_same next_btn_same" style={{textDecoration:"none"}} to="/signup/activitylevel">Next</Link>
						
							{/* <button className="btn_bn_same back_btn_same">Back</button>
							<button className="btn_bn_same next_btn_same">Next</button> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
