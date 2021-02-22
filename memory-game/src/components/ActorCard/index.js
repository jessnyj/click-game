import React from "react";
import "./style.css";

function ActorCard(props) {
    return (
        // <div className="container">
        //     <div className="row">
        //         <div className="col-9"></div>
                <div className="card">
                    <img src={props.image} alt={props.name} className="img-thumbnail"></img>
                </div>
        //     </div>
        // </div>
    );
}

export default ActorCard;