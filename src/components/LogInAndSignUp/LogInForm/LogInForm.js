import React from 'react';
import { Link } from 'react-router-dom';
import {
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle, 
    Button,
    Form, 
    FormGroup, 
    Label, 
    Input, 
    FormText
  } from 'reactstrap';
import './LogInForm.css';
import {auth} from "../../../firebase";




export const LogInForm =({logInSuccess}) => {
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
                var errorMessage = error.message;
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
                                Submit
                            </Button>
                        </Form>
                    </CardBody>
                </Card>
                <form className="logFormForm" onSubmit={mySubmitHandler}>
                    <input 
                        className="logFormInput"
                        onSubmit={mySubmitHandler}
                    />
                    <input 
                        className="logFormInput"
                        type="text"
                        name="password"
                        placeholder="Enter Password"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <input
                            className="logFormButton"
                            type="submit"
                            value="Submit"
                        />
                    
                    
                </form>
            </div>
        )
    
}

export default LogInForm
