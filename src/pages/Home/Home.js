import React from 'react';
//import Part from '../../components/Part/Part';
import './Home.css';
import Navbar from './../../components/Navbar/Navbar';
import Profile from './../../components/Profile/Profile';

function Home() {
    return (
        <div className="homeContainer">
            <Navbar />
            <Profile />
            
        </div>
    )
}

export default Home
