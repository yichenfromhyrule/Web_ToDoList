import React from 'react';
import './SignUpForm.css';
import firebase from "../../../firebase";


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
        firebase
            .auth()
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
                    { setErrorMsg ? (
                        <p>dsgjfjdsj</p>
                    ):(
                        null
                    )}
                </form>
            </div>
        )
    
}

export default SignUpForm