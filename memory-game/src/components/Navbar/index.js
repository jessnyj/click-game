import React from "react";
import "./style.css";

function Navbar() {
    return (
            <nav className="navbar sticky-top">
                <div className="navbar-brand"><a href="/">The Simpsons Game</a></div>
                <div className="navbar-text">Click an image to begin!</div>
                <div className="navbar-text">Score: 0 | Top Score: 0</div>
            </nav>
    );
}









export default Navbar;
