import React from 'react';
import './LogInForm.css';


class LogInForm extends React.Component {
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
            <div className="logFormContainer">
                <form className="logFormForm" onSubmit={this.mySubmitHandler}>
                    <input 
                        className="logFormInput"
                        type="text"
                        name="email"
                        placeholder="Enter Email"
                        onChange={this.myEmailHandler}
                    />
                    <input 
                        className="logFormInput"
                        type="text"
                        name="password"
                        placeholder="Enter Password"
                        onChange={this.myPasswordHandler}
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
}

export default LogInForm
