import "./welcome.css"
import "./createaccount.css";
import { useState, useMemo } from "react";

export const CreateAccount = () => {
	const [data, setData] = useState([]);
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
			<div className="bottom_nav_div_l2">
				<div className="form_container_b1">
					<div className="form_container_bottom_div_b1">
                        
						<form onClick={handleSubmit} className="createform_c1">
                        <p className="form_heading_c1">Almost there! Create your account</p>
                            <div className="input_div1_c1">
                            <input className="form_input_c1" type="email" placeholder=" Email address" onChange={handleChange}/>
                            <input className="form_input_c1" type="password" placeholder="create a password" onChange={handleChange}/>
                            <p className="input_bottom_text_c1">Must be at least 10 characters, no spaces.</p>
                            </div>
                            <div className="btn_div1_c1"> 
                            <p className="input_bottom_text1_c1">By signing up for MyFitnessPal, you are agreeing to our <a href="#">Privacy Policy</a> and <a href="#">Terms.</a></p>
							<div className="btn_div1_bottom_c1" >
                                <button className="continue_btn_c1">Continue</button>
								             <p style={{textAlign:"center",}}>OR</p>
								<button className="continue_btn_c1">Google</button>
                                </div>
								</div>
                             
                        </form>
								
					</div>
				</div>
			</div>
		</div>
	);
};