import React from 'react';
import "./LogIn.css";
import { 
    Button,
    Form, 
    FormGroup, 
    Label, 
    Input
} from 'reactstrap';
import {auth} from "../../../firebase";
import firebase from "firebase";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LogIn=()=> {
    // Email LogIn
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
                var errorCode = error.code;
                alert(errorCode);
            });
    }

    return (
        <div>
            <Form onSubmit={mySubmitHandler}>
                <FormGroup>
                    <div className="welcomeText">
                        Welcome Back!
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
                        LogIn
                    </Button>
                    <div className="hrText">
                        <span>
                            or
                        </span>
                    </div>
                    <Button 
                        outline 
                        color="primary"
                        className="mt-2 btn-block rounded-0 bouton-image monBouton"
                        onClick = {googleSignIn}
                    >
                        <span>Google</span>
                    </Button>
                    <div className="tipText">
                        <span>
                            Don&apos;t have an account?
                        </span>
                    </div>
                </FormGroup>
            </Form>
        </div>
    )
}

export default LogIn
