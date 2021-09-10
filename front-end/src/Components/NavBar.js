import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import logo from "../images/logo.svg";
import { FaAlignRight, FaHome } from "react-icons/fa";
import { signOut } from "../Services/Firebase";
import { useAuth } from "../Providers/AuthProvider"
// import { checkPropTypes } from "prop-types";
const NavBar = () => {
	// toggle the navbar
	const [toggleMenu, setToggleMenu] = useState(false);
	const { currentUser } = useAuth()
	const handleToggle = () => {
		setToggleMenu((isOpen) => !isOpen);
	};

	return (
		<nav className="navbar">
			<div className="nav-center">
				<div className="nav-header">
					{/* replace this home icon with the Logo Image  */}
					<NavLink to={"/"}>
						<FaHome className="nav-icon" />
					</NavLink>
					<button type="button" className="nav-btn" onClick={handleToggle}>
						<FaAlignRight className="nav-icon" />
					</button>
				</div>
				<ul className={toggleMenu ? "nav-links show-nav" : "nav-links"}>
					<li>
						<NavLink to={"/"}>Home</NavLink>
					</li>
					<li>
						<NavLink to={"/users/chefs"}>Chefs</NavLink>
					</li>
					<li>
						<NavLink to={"/users/login"}>Login</NavLink>
					</li>
					<li>
						<NavLink to={"/"} onClick={signOut} >Logout</NavLink>
					</li>
					<li>
					Logged in:  {currentUser && currentUser.email}
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
