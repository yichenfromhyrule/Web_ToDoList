import React from 'react';
import './../../App.css';
import WelcomeForm from '../../components/WelcomForm/Main/WelcomeForm';
import {Navbar, NavbarBrand} from 'reactstrap';

function Welcome() {
    return (
        <div className="App">
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">猪猪</NavbarBrand>
            </Navbar>
            <div className="welcomeContainer">
                <div className="welcomeFormContainer">
                    <WelcomeForm />
                </div>
            </div> 
        </div>
    )
}

export default Welcome
