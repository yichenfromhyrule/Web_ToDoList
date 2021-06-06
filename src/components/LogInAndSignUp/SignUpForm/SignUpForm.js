import React from 'react';
import './SignUpForm.css';
import {
    Card, 
    CardBody,
    Button,
    Form, 
    FormGroup, 
    Label, 
    Input
} from 'reactstrap';
import {auth} from "../../../firebase";


export const SignUpForm =({ signUpSuccess }) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    var errorMsg=[];
    
    const mySubmitHandler = async(event) => {
        event.preventDefault()
        if(password.length < 6){
            errorMsg.push("Password should be at least 6 characters");
            alert("Password should be at least 6 characters");
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