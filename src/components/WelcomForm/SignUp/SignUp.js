import React from 'react';
import "./../LogIn/LogIn.css";
import { 
    Button,
    Form, 
    FormGroup, 
    Label, 
    Input
} from 'reactstrap';
import {auth} from "../../../firebase";
import firebase from "firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const  SignUp =({ signUpSuccess })=> {
    // Email Sign Up
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    var errorMsg=[];

    const mySubmitHandler = async(event) => {
        event.preventDefault();
        if(password.length < 6){
            errorMsg.push("Password should be at least 6 characters");
            alert("Password should be at least 6 characters");
        }
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
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

    // Google Account Sign In
    var provider = new firebase.auth.GoogleAuthProvider();
    const googleSignIn = () => {
        auth
            .signInWithPopup(provider)
            .then((userCredential)=>{
                var user = userCredential.user;
                console.log(user);
                localStorage.setItem('rememberUser', email);
                window.location.href = "/home";
            })
            .catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    return (
        <div>
            <Form onSubmit={mySubmitHandler}>
                <FormGroup>
                    <div className="welcomeText">
                        Nice To Meet You!
                    </div>
                    <Label className="mt-2">Email</Label>
                    <Input 
                        xs="6" 
                        type="email" 
                        name="email" 
                        id="exampleEmail" 
                        placeholder="Enter your email address"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <Label className="mt-2">Password</Label>
                    <Input 
                        xs="6" 
                        type="password" 
                        name="password" 
                        id="examplePassword" 
                        placeholder="Enter your password"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <Button className="mt-3 btn-dark btn-block rounded-0">
                        Sign Up
                    </Button>
                    <div className="hrText">
                        <span>
                            or
                        </span>
                    </div>
                    <Button 
                        outline 
                        color="primary"
                        className="mt-2 btn-block rounded-0"
                        onClick = {googleSignIn}
                    >
                        <span>
                            <FontAwesomeIcon icon="fa-solid fa-g" />
                        </span>
                        <span>Google</span>
                    </Button>
                    <div className="tipText">
                        <span>
                            Already have an account?
                        </span>
                    </div>
                </FormGroup>
            </Form>
        </div>
    )
}

export default SignUp
