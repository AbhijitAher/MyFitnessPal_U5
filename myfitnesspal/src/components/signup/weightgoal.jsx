import React, { useState } from "react";
import "./welcome.css";
import "./weightgoal.css";
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
			<div className="nav_bottom_div">
				<div className="weight_goal">
					<h2>What is your weight goal?</h2>
					<div className="wgt">
						<ul>
							<li>
								<div className="weight_type">
									<input
										type="radio"
										value="1"
										name="radio"
										id="radio1"
										onChange={(e) => setText(e.target.value)}
									/>
									<label for="radio1">Lose Weight</label>
								</div>
							</li>
							<li>
								<div className="weight_type">
									<input
										type="radio"
										value="2"
										name="radio"
										id="radio2"
										onChange={(e) => setText(e.target.value)}
									/>
									<label for="radio2">Maintain Weight</label>
								</div>
							</li>
							<li>
								<div className="weight_type">
									<input
										type="radio"
										value="3"
										name="radio"
										id="radio3"
										onChange={(e) => setText(e.target.value)}
									/>
									<label for="radio3">Gain Weight</label>
								</div>
							</li>
						</ul>
						<div className="btn_footer">
							<button className="btn_bn back">Back</button>
							<button className="btn_bn next">Next</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
