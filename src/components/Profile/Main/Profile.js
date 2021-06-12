import React from 'react';
import "./Profile.css";
import Photo from "./../Photo/Photo";
import CalendarItem from "../CalenderItem/CalenderItem";

function Profile() {
    return (
        <div className="profileContainer">
            <Photo />
            <CalendarItem />
        </div>
    )
}

export default Profile
