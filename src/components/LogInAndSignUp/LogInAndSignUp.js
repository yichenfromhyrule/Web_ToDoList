import React, {useState} from 'react';
import LogInForm from './LogInForm/LogInForm';
import SignUpForm from './SignUpForm/SignUpForm';
import HomePage from '../HomePage/HomePage';


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
            {user ? (<HomePage user={user} />) : (<SignUpForm onSuccess={setUser} />)}
            
        </div>
    )
}

export default LogInAndSignUp
