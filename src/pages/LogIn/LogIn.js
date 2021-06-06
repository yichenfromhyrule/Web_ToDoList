import React from 'react';
import './../../App.css';
import LogInAndSignUp from '../../components/LogInAndSignUp/LogInAndSignUp';
import Footer from '../../components/Footer/Footer';

function LogIn() {
    return (
        <div className="App">
            <LogInAndSignUp />
            
            <Footer />
        </div>
    )
}

export default LogIn
