import React, { useState } from "react";
import "./welcome.css";
import "./activitylevel.css";
import "./weightgoal.jsx";
import "./detailspage.jsx";
import { Link, Router, BrowserRouter } from 'react-router-dom'
export const BaselineActivity = () => {
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
			<div className="nav2_bottom_div">
				<div className="user_activity">
					
					<div className="activity_level">
					<p className="main_para_head">What is your baseline activity level?</p>
					<p className="activity_para">
						Not including workouts-we count that separately
					</p>
						<ul className="ul2">
							<li className="li2">
								<div className="activity_level_type">
									<input className="activity_level_type_input"
										type="radio"
										value="1"
										name="radio"
										id="radio1"
										onChange={(e) => setText(e.target.value)}
									/>
									<label className="activity_input_label" for="radio1">
										<p className="spanpara">
											<span>
												<strong style={{fontSize:"18px",fontWeight:"600"}}>Not Very Active</strong>
											</span>
											<br />
											spend most of the day in sitting (e.g., Bankteller,
											helpdesk job)
										</p>
									</label>
								</div>
							</li>
							<li className="li2">
								<div className="activity_level_type">
									<input className="activity_level_type_input"
										type="radio"
										value="2"
										name="radio"
										id="radio2"
										onChange={(e) => setText(e.target.value)}
									/>
									<label className="activity_input_label" for="radio2">
										<p className="spanpara">
											<span>
												<strong style={{fontSize:"18px",fontWeight:"600",}}>Lightly Active</strong>
											</span>
											<br />
											spend a good part of day on your feet (e.g., Teacher,
											sallespersone)
										</p>
									</label>
								</div>
							</li>
							<li className="li2">
								<div className="activity_level_type">
									<input className="activity_level_type_input"
										type="radio"
										value="3"
										name="radio"
										id="radio3"
										onChange={(e) => setText(e.target.value)}
									/>
									<label className="activity_input_label" for="radio3">
										{" "}
										<p className="spanpara">
											<span>
												<strong style={{fontSize:"18px",fontWeight:"600"}}> Active</strong>
											</span>
											<br />
											spend a good part of the day doing some physical activity
											(e.g., food server, postal career)
										</p>
									</label>
								</div>
							</li>
							<li className="li2">
								<div className="activity_level_type">
									<input className="activity_level_type_input"
										type="radio"
										value="4"
										name="radio"
										id="radio4"
										onChange={(e) => setText(e.target.value)}
									/>
									<label className="activity_input_label" for="radio4">
										{" "}
										<p className="spanpara">
											<span>
												<strong style={{fontSize:"18px",fontWeight:"600"}}>Very Active</strong>
											</span>
											<br />
											spend a good part of the day doing heavy physical activity
											(e.g., bike messanger, carpenter)
										</p>
									</label>
								</div>
							</li >
							<li className="li2">
							<div className="btn_footer_div3">
							<Link className="btn_bn21 back_btn12" style={{textDecoration:"none"}} to="/signup/weightgoal">Back</Link>
						<Link className="btn_bn21 next_btn12" style={{textDecoration:"none"}} to="/signup/details">Next</Link>
						
							{/* <button className="btn_bn21 back_btn12">Back</button>
							<button className="btn_bn21 next_btn12">Next</button> */}
							
						</div>
						</li>
						</ul>
						
					</div>
				</div>
			</div>
		</div>
	);
};
