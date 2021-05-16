import React, {useState} from 'react';
import './LogInAndSignUp.css';
import { 
    Collapse, 
    Container,
    Col,
    Navbar, 
    NavbarToggler, 
    NavbarBrand, 
    Nav, 
    NavItem, 
    NavLink, 
    NavbarText,
    Row,
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle, 
    Button
} from 'reactstrap';
import LogInForm from './LogInForm/LogInForm';
import SignUpForm from './SignUpForm/SignUpForm';



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
                                <NavLink onClick={clickSign}>Create An Account</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
            
            <div className="logSignContainer">
                <>
                    <>
                        {showLog ? (
                            <div>
                                <LogInForm />
                            </div>
                        ) : (
                            <div>
                                {showSign ? (
                                    <div>
                                        <SignUpForm />
                                    </div>
                                ):(
                                    null
                                )}
                            </div>
                        )}
                    </>
                </>
            </div>
            
            
        </div>
    )
}

export default LogInAndSignUp
