import "./welcome.css";
import "./detail.css";
import { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
export const Detail = () => {
	const [data, setData] = useState([]);
	const [value, setValue] = useState("");
	const options = useMemo(() => countryList().getData(), []);

	const changeHandler = (value) => {
		setValue(value);
	};
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
			<div className="bottom_nav_div">
				<div className="Address_div">
					<div className="Address_bottom_div">
						<ul className="order_ul">
							<li className="list_li">
								<p className="head_para">
									Please select which sex we should use to calculate your
									calorie needs.
								</p>
								<div className="gender_type">
									<label className="radio">
										<input type="radio" value="Male" name="radio" />
										Male
										<span className="checkmark"></span>
									</label>
									<label className="radio">
										<input type="radio" value="Female" name="radio" />
										Female
										<span className="checkmark"></span>
									</label>
								</div>
							</li>

							<li className="list_li">
								<p className="head_para">When were you born?</p>

								<div className="dates">
									<input
										type="date"
										placeholder="dd/mm/yy"
										onChange={handleChange}
									/>
								</div>
							</li>
							<li className="list_li">
								<p className="head_para">Where do you live?</p>
								<div className="born_detail">
									<div className="detail">
										<Select
											className="textbox"
											options={options}
											value={value}
											placeholder="country"
											size="lg"
											onChange={changeHandler}
										/>
									</div>
									<div className="detail">
										<input
											className=" pin1"
											type="number"
											placeholder=" "
											onChange={handleChange}
											required
										/>
										<label className=" pin">Zipcode</label>
									</div>
								</div>
							</li>
							<li>
								<p className="para_text">
									We use this information to calculate an accurate calorie goal
									for you.
								</p>

								<div className="bottom_div">
									<button className="BN btn1_back">Back</button>
									<button className="BN btn2_next">Next</button>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
