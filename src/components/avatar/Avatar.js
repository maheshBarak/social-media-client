import React from "react";
import "./avatar.scss";
import userImg from "../../assets/user.png";
function Avatar({ src }) {
    return (
        <div className="Avatar">
            <img src={src ? src : userImg} alt="user avatar" />
        </div>
    );
}

export default Avatar;
