import React, {useState} from 'react';
import './LogInAndSignUp.css';
import LogInForm from './LogInForm/LogInForm';
import SignUpForm from './SignUpForm/SignUpForm';
import ThankForm from './ThankForm/ThankForm';


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
            <div className="logContainer">
                <div className="logText" onClick={clickLog}>
                    Log In
                </div>
                <div className="logDivider">
                    |
                </div>
                <div className="logText" onClick={clickSign}>
                    Sign Up
                </div>
            </div>
            {showLog ? (
                <LogInForm />
            ) : (
                <div>
                {showSign ? (
                    <div>
                        {user ? (<ThankForm />) : (<SignUpForm onSuccess={setUser} />)}
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
