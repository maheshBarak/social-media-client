import React from "react";
import "./Post.scss";
import Avatar from "../avatar/Avatar";
import cycle from "../../assets/cycle.jpg";
import { AiOutlineLike } from "react-icons/ai";

function Post() {
    return (
        <div className="Post">
            <div className="heading">
                <Avatar />
                <h4>Mahesh Barak</h4>
            </div>
            <div className="content">
                <img src={cycle} alt="" />
            </div>
            <div className="footer">
                <div className="like">
                    <AiOutlineLike className="icon" />
                    <h4>4 likes</h4>
                </div>
                <p className="caption">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni eligendi iusto repudiandae quisquam repellendus esse.
                </p>
                <h6 className="time-ago">4 hrs ago</h6>
            </div>
        </div>
    );
}

export default Post;
