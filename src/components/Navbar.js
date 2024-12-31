import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import "./Navbar.css";

function Navbar({ onContactClick }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.signOut();
        navigate("/login"); // Redirect to login after logout
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo" onClick={() => navigate("/")}>
                Pet Adoption
            </div>
            <ul className="navbar-menu">
                <li>
                    <a
                        href="#home"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("/");
                        }}
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="#adopt"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("/#adopt");
                        }}
                    >
                        Adopt
                    </a>
                </li>
                <li>
                    <a
                        href="#about"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("/#about");
                        }}
                    >
                        About Us
                    </a>
                </li>
                <li>
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            onContactClick();
                        }}
                    >
                        Contact Us
                    </a>
                </li>
                <li>
                    <a
                        href="#logout"
                        onClick={(e) => {
                            e.preventDefault();
                            handleLogout();
                        }}
                    >
                        Logout
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
