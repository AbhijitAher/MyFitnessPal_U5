import "./App.css";
import { HomePage } from "./components/Homepage";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { Food } from "./components/Food";
import { Welcome } from "./components/signup/welcome";
import { LooseWeight } from "./components/signup/weightgoal";
import { BaselineActivity } from "./components/signup/activitylevelpage";
import { Detail } from "./components/signup/detailspage";
import { BodyScan } from "./components/signup/bodyscanpg";
import { WeightReduce } from "./components/signup/WeightReducepg";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/food" element={<Food />}></Route>

				{/* Signup Page 1 */}
				<Route path="/signup/welcome" element={<Welcome />}></Route>

				{/* Signup Page 2 */}
				<Route path="/signup/weightgoal" element={<LooseWeight />}></Route>

				{/* Signup Page 3 */}
				<Route
					path="/signup/activitylevel"
					element={<BaselineActivity />}
				></Route>

				{/* Signup Page 4 */}
				<Route path="/signup/details" element={<Detail />}></Route>

				{/* Signup Page 5 - Goals*/}
				<Route path="/signup/goals" element={<BodyScan />}></Route>

        {/* Signup Page 6 */}
				<Route path="/signup/weeklygoal" element={<WeightReduce />}></Route>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
