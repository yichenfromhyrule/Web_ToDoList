import React , {useState} from 'react';
import "./WelcomeForm.css";
import { 
    Button,
    Col,
    Card 
} from 'reactstrap';
import cuteImg from "./../../../images/anime/01.jpeg";
import LogIn from "./../LogIn/LogIn";
import SignUp from "./../SignUp/SignUp";


export const WelcomeForm=()=> {
    const [showLog, setShowLog] = useState(false);
    const [showSign, setShowSign] = useState(false);
    const clickLog = () => {
        if(localStorage.getItem('rememberUser')){
            //window.location.href = "/home";
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
    return (
        <div className="row no-gutters">
            <Col xs="5">
                <Card 
                    body
                    className="border-0 rounded-0 h-100"
                >
                    {showLog ? (
                        <div>
                            <LogIn />
                            <Button
                                className="btn-block rounded-0"
                                color="info"
                                onClick={clickSign}
                            >
                                Create account
                            </Button>
                        </div>
                    ):(
                        <div>
                            <SignUp />
                            <Button
                                className="btn-block rounded-0"
                                color="success"
                                onClick={clickLog}
                            >
                                Log In
                            </Button>
                        </div>    
                    )}
                    
                </Card>
            </Col>
            <Col xs="7">
                <Card 
                    body
                    className="border-0 rounded-0 h-100"
                >
                    <img height="100%" src={cuteImg} alt="Card image cap" />
                </Card>
            </Col>     
        </div>
    )
}

export default WelcomeForm
