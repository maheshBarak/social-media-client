import React from "react";
import "./follower.scss";
import Avatar from "../avatar/Avatar";

function Follower() {
    return (
        <div className="Follower">
            <div className="user-info">
                <Avatar />
                <h4 className="name">Robin</h4>
            </div>

            <h5 className="hover-link follow-link">Follow</h5>
        </div>
    );
}

export default Follower;
