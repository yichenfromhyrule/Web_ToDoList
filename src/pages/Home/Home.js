import React from 'react';
import './../../App.css';
import Part from '../../components/Part/Part';
import './Home.css';
import HomeNavbar from '../Navbar/Navbar';

function Home() {
    return (
        <div className="App">
            <HomeNavbar />

            <Part />
            
        </div>
    )
}

export default Home
