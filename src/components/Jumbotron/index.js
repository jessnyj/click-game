import React from "react";
import "./style.css";

function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">The Simpsons Game</h1>
                <p className="lead">Click on an image to earn points, but don't select an image more than once!</p>
            </div>
        </div>
    )
}

export default Jumbotron;