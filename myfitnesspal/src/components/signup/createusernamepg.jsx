import "./welcome.css"
import "./create_username.css";
import "./createaccount_pg.jsx"
import "../Homepage";
import { Link,Routes,Route } from "react-router-dom";
import { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
export const CreateUsername = () => {
	const [data, setData] = useState([]);
	const [value, setValue] = useState("");
	const options = useMemo(() => countryList().getData(), []);

    const handleSubmit = (e) => {
	e.preventDefault();
	
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
			<div className="bottom_nav12_div">
				<div className="form_container1">
					<div className="form_container_bottom_div1">
                        
						<form onClick={handleSubmit} className="createusernameform">
                        <p className="form_heading"> Create Username</p>
                            <div className="input_div_w1">
                            <input className="form_user_input" type="text" placeholder=" Username" onChange={handleChange}/>
                          
                           
                            </div>
                           
                           {/* <button className="btn_BN_a2 btn_back_b1">Back</button>
								<button className="btn_BN_a2 btn_next_n1">Finish</button> */}
                                <div className="footer_div32">
								<Link className="btn_BN_a2 btn_back_b1" style={{textDecoration:"none"}} to="/signup/createaccount">Back</Link>
						         <Link className="btn_BN_a2 btn_next_n1" style={{textDecoration:"none"}} to="/">Finish</Link>
								
							</div>
                        </form>
								
					</div>
				</div>
			</div>
		</div>
	);
};