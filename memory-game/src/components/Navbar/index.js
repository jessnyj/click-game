import React from "react";
import "./style.css";

function Navbar(props) {
    return (
            <nav className="navbar sticky-top">
                <div className="navbar-brand"><a class="link" href="/">The Simpsons Game</a></div>
                <div className="navbar-text">{props.rightWrong}</div>
                <div className="navbar-text">Score: {props.score} | Top Score: {props.topScore}</div>
            </nav>
    );
}









export default Navbar;
