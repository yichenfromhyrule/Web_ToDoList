import React from 'react';
import './SignUpForm.css';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";


export const SignUpForm =({ onSuccess }) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    
    const mySubmitHandler = async(event) => {
        event.preventDefault();
        const user = await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password);
        onSuccess(user);
        return; 
    }

        
        return (
            <div className="signFormContainer">
                <form className="signFormForm" onSubmit={mySubmitHandler}>
                    <input 
                        className="signFormInput"
                        type="text"
                        name="email"
                        placeholder="Enter Email"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <input 
                        className="signFormInput"
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    
                    <input
                        className="signFormButton"
                        type="submit"
                        value="Create An Account"
                    />
                </form>
            </div>
        )
    
}

export default SignUpForm