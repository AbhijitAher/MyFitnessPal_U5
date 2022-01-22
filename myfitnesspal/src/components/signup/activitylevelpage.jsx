import React, { useState } from "react";
import "./welcome.css";
import "./activitylevel.css";
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
			<div className="nav_bottom_div">
				<div className="weight_goal">
					<h2>What is your baseline activity level?</h2>
					<p className="activity_para">
						Not including workouts-we count that separately
					</p>
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
									<label for="radio1">
										<p>
											<span>
												<strong>Not Very Active</strong>
											</span>
											<br />
											spend most of the day in sitting (e.g., Bankteller,
											helpdesk job)
										</p>
									</label>
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
									<label for="radio2">
										<p>
											<span>
												<strong>Lightly Active</strong>
											</span>
											<br />
											spend a good part of day on your feet (e.g., Teacher,
											sallespersone)
										</p>
									</label>
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
									<label for="radio3">
										{" "}
										<p>
											<span>
												<strong> Active</strong>
											</span>
											<br />
											spend a good part of the day doing some physical activity
											(e.g., food server, postal career)
										</p>
									</label>
								</div>
							</li>
							<li>
								<div className="weight_type">
									<input
										type="radio"
										value="4"
										name="radio"
										id="radio4"
										onChange={(e) => setText(e.target.value)}
									/>
									<label for="radio4">
										{" "}
										<p>
											<span>
												<strong>Very Active</strong>
											</span>
											<br />
											spend a good part of the day doing heavy physical activity
											(e.g., bike messanger, carpenter)
										</p>
									</label>
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
