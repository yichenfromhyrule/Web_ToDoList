import React from 'react';
import './../App.css';
import LogInAndSignUp from './../components/LogInAndSignUp/LogInAndSignUp';
import Footer from './../components/Footer/Footer';
import Logo from './../images/anime/gintoki.jpeg';

function LogIn() {
    return (
        <div className="App">
            <LogInAndSignUp />
            
            <Footer />
        </div>
    )
}

export default LogIn
