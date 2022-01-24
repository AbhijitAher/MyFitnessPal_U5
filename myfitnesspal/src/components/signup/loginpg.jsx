import "./welcome.css"
import "./login.css";
import { useState, useMemo } from "react";

import Select from "react-select";
import countryList from "react-select-country-list";
import { useNavigate,Link } from "react-router-dom";
export const Login = () => {
	const navigate= useNavigate();
	const [data, setData] = useState([]);
	const [value, setValue] = useState("");
	const options = useMemo(() => countryList().getData(), []);

    const handleSubmit = (e) => {
	e.preventDefault();
	alert("Login Successful , Welcome !!")
	navigate("/goals")

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
					<Link to={"/"}>	<button className="myfit">myfitnesspal</button></Link>
					</div>
				</div>
			</div>
			<div className="bottom_nav_div12">
				<div className="form_container">
					<div className="form_container_bottom_div">
                        
						<form onSubmit={handleSubmit} className="createform">
                        <p className="form_heading">Member Login Page</p>
                            <div className="input_div1">
                            <input className="form_input" type="email" placeholder=" Email address" onChange={handleChange}/>
                            <input className="form_input" type="password" placeholder="Enter password" onChange={handleChange}/>
                            <p className="input_bottom_text">Must be at least 10 characters, no spaces.</p>
                            </div>
                            <div className="btn_div1"> 
                            <p className="input_bottom_text1">By signing up for MyFitnessPal, you are agreeing to our <a>Privacy Policy</a> and <a>Terms.</a></p>
                                <button className="continue_btn">Continue</button>
                                </div>

                        </form>
								
					</div>
				</div>
			</div>
		</div>
	);
};