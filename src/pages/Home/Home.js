import React from 'react';
import './../../App.css';
import Footer from '../../components/Footer/Footer';
import Part from '../../components/Part/Part';
import './Home.css';

function Home() {
    return (
        <div className="homeContainer">
            <Part />
            <Footer />
        </div>
    )
}

export default Home
