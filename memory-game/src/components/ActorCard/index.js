import React from "react";
import "./style.css";

function ActorCard(props) {
    return (
        <div className="container">
        <div>
            <img src={props.image} alt={props.name} className="img-thumbnail"></img>
        </div>
        </div>
    );
}

export default ActorCard;