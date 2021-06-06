import React from 'react';
import "./WelcomeForm.css";
import { 
    Button,
    FormText,
    Col,
    Card 
} from 'reactstrap';
import cuteImg from "./../../../images/anime/01.jpeg";
import LogIn from "./../LogIn/LogIn";


export const WelcomeForm=()=> {
    
    return (
        <div className="row no-gutters">
            <Col xs="5">
                <Card 
                    body
                    className="border-0 rounded-0 h-100"
                >
                    <LogIn />
                    <FormText>
                        Don&apos;t have an account?
                    </FormText>
                    <Button>
                        Create account
                    </Button>
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
