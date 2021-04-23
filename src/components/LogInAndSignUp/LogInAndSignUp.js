import React, {useState} from 'react';
import './LogInAndSignUp.css';
import LogInForm from './LogInForm/LogInForm';
import SignUpForm from './SignUpForm/SignUpForm';
import ThankForm from './ThankForm/ThankForm';
import gintoki from './../../images/anime/gintoki.jpeg';
import img1 from './../../images/anime/img1.png';


function LogInAndSignUp() {
    const [user, setUser] = React.useState(null);
    
    const [showLog, setShowLog] = useState(false);
    const [showSign, setShowSign] = useState(false);
    const clickLog = () => {
        if(showLog){
            setShowLog(false)
        }
        else{
            setShowSign(false)
            setShowLog(true)
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
    return (
        <div>
            <div className="logSignContainer">
                <div className="logSignText" onClick={clickLog}>
                    Log In
                </div>
                <div className="logSignDivider">
                    |
                </div>
                <div className="logSignText" onClick={clickSign}>
                    Sign Up
                </div>
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
