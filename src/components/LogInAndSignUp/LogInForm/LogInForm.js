import React from 'react';
import { Link } from 'react-router-dom';
import './LogInForm.css';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";


export const LogInForm =({logInSuccess}) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const mySubmitHandler = async(event) => {
        event.preventDefault();
        const login = await firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert("You are submitting"+email+" password: " + password);
            });
        logInSuccess(login);
        return;
    }
    
    
        return (
            <div className="logFormContainer">
                <form className="logFormForm" onSubmit={mySubmitHandler}>
                    <input 
                        className="logFormInput"
                        type="text"
                        name="email"
                        placeholder="Enter Email"
                        onChange={(event) => setEmail(event.target.value)}
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
