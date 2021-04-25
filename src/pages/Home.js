import React from 'react';
import './../App.css';
import LogInAndSignUp from './../components/LogInAndSignUp/LogInAndSignUp';
import Footer from './../components/Footer/Footer';
import Part from '../components/Part/Part';

function Home() {
    return (
        <div className="App">
            <Part />
            <Footer />
        </div>
    )
}

export default Home
