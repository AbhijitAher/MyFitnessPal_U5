import React, { useState } from "react";
import "./welcome.css";
import "./WeightReduce.css";
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
				<div className="weight_choose_goal">
					<div className="weight_selection">
						<p className="heading">What is your weekly goal?</p>
						<p className="para">
							Let's break down your overall health goal into a weekly one you
							can maintain. Slow-and-steady is best!
						</p>
						<ul className="order">
							<li className="list">
								<div className="weightsel_type">
									<input
										type="radio"
										value="1"
										name="radio"
										id="radio1"
										onChange={(e) => setText(e.target.value)}
									/>
									<label for="radio1">Lose 0.25 kilograms per week</label>
								</div>
							</li>
							<li className="list">
								<div className="weightsel_type" style={{ textAlign: "left" }}>
									<input
										type="radio"
										value="2"
										name="radio"
										id="radio2"
										onChange={(e) => setText(e.target.value)}
									/>
									<label for="radio2">
										Lose 0.25 kilograms per week (Recommeneded)
									</label>
								</div>
							</li>
							<li className="list">
								<div className="weightsel_type">
									<input
										type="radio"
										value="3"
										name="radio"
										id="radio3"
										onChange={(e) => setText(e.target.value)}
									/>
									<label for="radio3">Lose 0.75 kilograms per week</label>
								</div>
							</li>
							<li className="list">
								<div className="weightsel_type">
									<input
										type="radio"
										value="4"
										name="radio"
										id="radio4"
										onChange={(e) => setText(e.target.value)}
									/>
									<label for="radio4">Lose 1 kilograms per week</label>
								</div>
							</li>
						</ul>
						<div className="button_footer">
							<button className="button_bn back_btn">Back</button>
							<button className="button_bn next_btn">Next</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
