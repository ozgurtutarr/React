import React from "react";
import "./ProfileCard.css"; // Assuming you have a CSS file for styles

const ProfileCard = ({ title, handle, img }) => {
  return (
    <div className="profile-card">
      <img src={img} alt={`${title}'s profile`} className="profile-image" />
      <h2 className="profile-title">{title}</h2>
      <p className="profile-handle">{handle}</p>
    </div>
  );
};

export default ProfileCard;
