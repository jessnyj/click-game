import React from "react";
import "./style.css";

function ActorCard(props) {
    return (
        <div onClick={() => props.cardSelection(props.id)} className={`card ${props.shake}`}>
            <img src={props.image} alt={props.name} className="img-thumbnail"></img>
        </div>
    );
}

export default ActorCard;