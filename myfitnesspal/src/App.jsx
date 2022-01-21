import './App.css';
import {HomePage} from "./components/Homepage"
import {Navbar} from "./components/Navbar"
import {Footer} from "./components/Footer"
import {Routes,Route} from "react-router-dom"
import {Food} from "./components/Food"

function App() {
  return (
    <div className="App">
      <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/food" element={<Food/>}></Route>
      </Routes>  
      <Footer/>
    </div>
  );
}

export default App;
