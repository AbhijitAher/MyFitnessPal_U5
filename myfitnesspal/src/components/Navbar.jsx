import "./Navbar.css"
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div id="navbar">
            <div id="navbar-upper">
           <Link id="logo" to="/"><h1 >myfitnesspal</h1>  </Link> 
         <div id="loginSignupLink">
         <Link to="/login">Log In</Link>
         <Link to="/signup/welcome">Sign Up</Link>
            </div>
            </div>
            <div id="navbar-lower">
            <Link to="/">ABOUT</Link>
            <Link to="/food">FOOD</Link>
            <Link to="/">EXERCISE</Link>
            <Link to="/apps">APPS</Link>
            <Link to="">COMMUNITY</Link>
            <Link to="">BLOG</Link>
            <Link to="/premium">PREMIUM</Link>
            <Link to="/goals">GOALS</Link>
            </div>
         
    </div>
    )}