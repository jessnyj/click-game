import React from "react";
import "./style.css";

function ActorCard(props) {
    return (
        // <div className="card-deck">
        <div>
            <img src={props.image} alt={props.name} className="img-thumbnail"></img>
        </div>
    );
}

export default ActorCard;