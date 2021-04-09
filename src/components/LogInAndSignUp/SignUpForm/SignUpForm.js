import React from 'react';
import './SignUpForm.css';


class SignUpForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userEmail: '',
            userPassword: ''
        };
    }
    mySubmitHandler = (event) => {
        alert("You are submitting"+this.state.userEmail+" password: " + this.state.userPassword);
    }
    myEmailHandler = (event) =>{
        this.setState({userEmail: event.target.value});
    }
    myPasswordHandler = (event) =>{
        this.setState({userPassword: event.target.value});
    }
    render() {
        return (
            <div className="signFormContainer">
                <form className="signFormForm" onSubmit={this.mySubmitHandler}>
                    <input 
                        className="signFormInput"
                        type="text"
                        name="email"
                        placeholder="Enter Email"
                        onChange={this.myEmailHandler}
                    />
                    <input 
                        className="signFormInput"
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        onChange={this.myPasswordHandler}
                    />
                    <input 
                        className="signFormInput"
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        onChange={this.myPasswordHandler}
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
}

export default SignUpForm