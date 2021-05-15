import React, {useState} from 'react';
import './LogInAndSignUp.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText} from 'reactstrap';
import LogInForm from './LogInForm/LogInForm';
import SignUpForm from './SignUpForm/SignUpForm';
import ThankForm from './ThankForm/ThankForm';
import gintoki from './../../images/anime/gintoki.jpeg';
import img1 from './../../images/anime/img1.png';


function LogInAndSignUp() {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = React.useState(null);
    const [showLog, setShowLog] = useState(false);
    const [showSign, setShowSign] = useState(false);
    const clickLog = () => {
        if(localStorage.getItem('rememberUser')){
            window.location.href = "/home";
        }else{
            if(showLog){
                setShowLog(false)
            }
            else{
                setShowSign(false)
                setShowLog(true)
            }   
        } 
    };
    const clickSign = () => {
        if(showSign){
            setShowSign(false)
        }
        else{
            setShowLog(false)
            setShowSign(true)
        }   
    };
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">猪猪家记事</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink onClick={clickLog}>Log In</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={clickSign}>Sign Up</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
            
            
            {showLog ? (
                <div className="logSignMainConatiner">
                    <div className="logSignImgContainer">
                        <img src={gintoki}></img>
                    </div>
                    <LogInForm />
                </div>
                
            ) : (
                <div>
                {showSign ? (
                    <div className="logSignMainConatiner">
                        <div className="logSignImgContainer">
                            <img src={img1}></img>
                        </div>
                        {user ? (<ThankForm />) : (<SignUpForm signUpSuccess={setUser} />)}
                    </div>
                ):(
                    null
                )}
                </div>
            )}
            
            
        </div>
    )
}

export default LogInAndSignUp
