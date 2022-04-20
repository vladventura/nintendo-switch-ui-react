import "./PlayerIcon.css";
import React from "react";
import profilePic from "../assets/karin.jpg";

export const PlayerIcon = () => {
    return <div className="player-icon">
        <p className="friends-count">2</p>
        <div className="player-icon-img-container">
            <img src={profilePic} alt="Player Icon" className="player-icon-img" />
        </div>
    </div>
};