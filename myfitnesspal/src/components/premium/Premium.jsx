import "./Premium.css";
import {Link} from "react-router-dom"
export const Premium = () => {
	return (
		<div className="div1">
			<img
				className="Img1"
				src="https://raw.githubusercontent.com/AbhijitAher/MyFitnessPal_U5/main/myfitnesspal/public/Images/premium/Image1.JPG"
				alt=""
			/>
			<img
				className="Img2"
				src="https://raw.githubusercontent.com/AbhijitAher/MyFitnessPal_U5/main/myfitnesspal/public/Images/premium/Image2.jpg"
				alt=""
			/>
			<img
				className="Img3"
				src="https://raw.githubusercontent.com/AbhijitAher/MyFitnessPal_U5/main/myfitnesspal/public/Images/premium/image3.jpg"
				alt=""
			/>
			<div className="div2">
				<Link to={"/payment"}>
				<img
					className="Img4"
					src="https://raw.githubusercontent.com/AbhijitAher/MyFitnessPal_U5/main/myfitnesspal/public/Images/premium/image4.jpg"
					alt=""
				/>
               </Link>
				<img
					className="Img5"
					src="https://raw.githubusercontent.com/AbhijitAher/MyFitnessPal_U5/main/myfitnesspal/public/Images/premium/image5.jpg"
					alt=""
					onClick={() => {}}
				/>
			</div>
		</div>
	);
};
