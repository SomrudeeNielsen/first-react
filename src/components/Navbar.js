import React, {useState} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import './Navbar.css';

const Navbar = () => {
const [click, setClick] = useState(false)

const handleClick = () => setClick(!click)

    return (
        <div className="sidebar">
        <div className="navbar">
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item"><a href="/">Home</a></li>
                    <li className="nav-item"><a href="/">Portfolio</a></li>
                    <li className="nav-item"><a href="/">Resume</a></li>
                </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={30} style={{color: 'white'}} />) : (<FaBars size={30} style={{color:'white'}} />)}
        </div>

        </div>

        </div>
    );
};

export default Navbar;