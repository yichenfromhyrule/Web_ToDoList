import React, {useState} from 'react';
import './LogInAndSignUp.css';
import LogInForm from './LogInForm/LogInForm';


function LogInAndSignUp() {
    const [showLog, setShowLog] = useState(false);
    const clickLog = () => {
        if(showLog){
            setShowLog(false)
        }
        else{
            setShowLog(true)
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
                <div className="logText">
                    Sign Up
                </div>
            </div>
            {showLog ? <LogInForm /> : null}
            
            
        </div>
    )
}

export default LogInAndSignUp
