
import React, { useState } from "react";
import "./welcome.css";
import "./WeightReduce.css";
import "./bodyscanpg.jsx";
import "./createaccount_pg.jsx";
import {Link,Routes,Route} from "react-router-dom";
export const WeightReduce = () => {
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
			<div className="navigation_bottom_div">
				<div className="weight_choose_goal2">
					<div className="weight_selection">
						<p className="heading12">What is your weekly goal?</p>
						<p className="para01">
							Let's break down your overall health goal into a weekly one you
							can maintain. Slow-and-steady is best!
						</p>
						<ul className="order">
							<li className="list">
								<div className="weightsel_type">
									<input className="weightsel_type_input"
										type="radio"
										value="1"
										name="radio"
										id="radio1"
										onChange={(e) => setText(e.target.value)}
									/>
									<label className="weightsel_type_label" for="radio1">Lose 0.25 kilograms per week</label>
								</div>
							</li>
							<li className="list">
								<div className="weightsel_type" style={{ textAlign: "left" }}>
									<input className="weightsel_type_input"
										type="radio"
										value="2"
										name="radio"
										id="radio2"
										onChange={(e) => setText(e.target.value)}
									/>
									<label className="weightsel_type_label" for="radio2">
										Lose 0.25 kilograms per week (Recommeneded)
									</label>
								</div>
							</li>
							<li className="list">
								<div className="weightsel_type">
									<input className="weightsel_type_input"
										type="radio"
										value="3"
										name="radio"
										id="radio3"
										onChange={(e) => setText(e.target.value)}
									/>
									<label className="weightsel_type_label" for="radio3">Lose 0.75 kilograms per week</label>
								</div>
							</li>
							<li className="list">
								<div className="weightsel_type">
									<input className="weightsel_type_input"
										type="radio"
										value="4"
										name="radio"
										id="radio4"
										onChange={(e) => setText(e.target.value)}
									/>
									<label className="weightsel_type_label" for="radio4">Lose 1 kilograms per week</label>
								</div>
							</li>
						</ul>
						<div className="button_footer">
						<Link className="button_bn back_btn" style={{textDecoration:"none"}} to="/signup/checkout">Back</Link>
						         <Link className="button_bn next_btn" style={{textDecoration:"none"}} to="/signup/createaccount">Next</Link>
							{/* <button className="button_bn back_btn">Back</button>
							<button className="button_bn next_btn">Next</button> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};