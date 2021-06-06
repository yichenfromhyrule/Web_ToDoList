import React from 'react';
import {
    Card,
    CardBody, 
    Button,
    Form, 
    FormGroup, 
    Label, 
    Input
  } from 'reactstrap';
import './LogInForm.css';
import {auth} from "../../../firebase";




export const LogInForm =() => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const mySubmitHandler = async(event) => {
        event.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log(user);
                localStorage.setItem('rememberUser', email);
                window.location.href = "/home";
            })
            .catch((error) => {
                var errorCode = error.code;
                alert(errorCode);
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
                                LogIn
                            </Button>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        )
    
}

export default LogInForm
