import "./welcome.css";
import "./bodyscan.css";
import { useState } from "react";
export const BodyScan = () => {
	const [data, setData] = useState([]);

	const handleChange = (e) => {
		let d = e.target.value;
		setData({ ...data, d });
	};
	return (
		<div>
			<div className="nav_container">
				<div className="nav">
					<div className="btn1">
						<button className="myfit">myfitnesspal</button>
					</div>
				</div>
			</div>
			<div className="nav_bottom_container">
				<div className="input_container">
					<div className="user_detail">
						<ul className="u_l">
							<li className="l_i">
								<p className="heading">How tall are you?</p>

								<div className="Userdetail">
									<input
										className=" User"
										type="text"
										onChange={handleChange}
										required
									/>
									<label className="unit">cm</label>
								</div>
							</li>
							<li className="l_i">
								<p className="heading">How much do you weigh?</p>
								<p className="text">
									It's OK to estimate. You can update this later.
								</p>
								<div className="Userdetail">
									<input
										className="User"
										type="text"
										onChange={handleChange}
										required
									/>
									<label className="unit">kg</label>
								</div>
							</li>
							<li className="l_i">
								<p className="heading">What's your goal weight?</p>
								<p className="text">
									Don't worry. This doesn't affect your daily calorie goal and
									you can always change it later.
								</p>
								<div className="Userdetail">
									<input
										className="User"
										type="text"
										onChange={handleChange}
										required
									/>
									<label className="unit">kg</label>
								</div>
							</li>
							<div className="footer_div">
								<button className="btn_BN btn_back">Back</button>
								<button className="btn_BN btn_next">Next</button>
							</div>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
