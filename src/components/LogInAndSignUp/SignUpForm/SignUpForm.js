import React from 'react';
import './SignUpForm.css';
import {
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle, 
    Col,
    Button,
    Form, 
    FormGroup, 
    Label, 
    Input, 
    FormText
} from 'reactstrap';
import {auth} from "../../../firebase";


export const SignUpForm =({ signUpSuccess }) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    var errorMsg=[];
    var setErrorMsg = false;
    
    const mySubmitHandler = async(event) => {
        event.preventDefault()
        if(password.length < 6){
            errorMsg.push("Password should be at least 6 characters");
            alert("Password should be at least 6 characters");
            setErrorMsg = true;
        }
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential)=>{
                var user = userCredential.user;
                window.location.href = "/home";
                signUpSuccess(user);
                return; 
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
            });
        
    }

        
        return (
            <div>
                <Card>
                    <CardBody>
                        <Form onSubmit={mySubmitHandler}>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Enter Email"
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    placeholder="Enter Password"
                                    onChange={(event) => setPassword(event.target.value)}
                                />
                            </FormGroup>
                            <Button>
                                Create An Account
                            </Button>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        )
    
}

export default SignUpForm