import React from "react";
import "./feed.scss";
import Post from "../Post/Post";
import Follower from "../follower/Follower";

function Feed() {
    return (
        <div className="Feed">
            <div className="container">
                <div className="left-part">
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
                <div className="right-part">
                    <div className="following">
                        <h3 className="title">You Are Following</h3>
                        <Follower />
                        <Follower />
                        <Follower />
                        <Follower />
                    </div>
                    <div className="suggestions">
                        <h3 className="title">People you may know</h3>
                        <Follower />
                        <Follower />
                        <Follower />
                        <Follower />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feed;
