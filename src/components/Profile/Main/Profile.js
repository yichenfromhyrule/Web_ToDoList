import React from 'react';
import "./Profile.css";
import Photo from "./../Photo/Photo";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Profile() {
    return (
        <div className="profileContainer">
            <Photo />
            <Calendar />
        </div>
    )
}

export default Profile
