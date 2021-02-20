import React from "react";
import "./style.css";

function Navbar() {
    return (
        <div className="container">
            <nav className="navbar sticky-top">
                <div className="navbar-brand"><a href="/">Simpsons Click Game</a></div>
                <div className="navbar-text">Click an image to begin!</div>
                <div className="navbar-text">Score: 0 | Top Score: 0</div>
            </nav>
        </div>
    );
}









export default Navbar;
