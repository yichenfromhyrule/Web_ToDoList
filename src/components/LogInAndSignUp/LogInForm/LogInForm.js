import React from 'react';
import './LogInForm.css';


class LogInForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {userEmail: ''};
    }
    mySubmitHandler = (event) => {
        alert("You are submitting"+this.state.userEmail);
    }
    myEmailHandler = (event) =>{
        this.setState({userEmail: event.target.value});
    }
    render() {
        return (
            <div className="logFormContainer">
                <form onSubmit={this.mySubmitHandler}>
                    <label>
                        Email:
                        <input 
                            type="text"
                            name="name"
                            onChange={this.myEmailHandler}
                        />
                    </label>
                    <input
                        type="submit"
                        value="Submit"
                    />
                </form>
            </div>
        )
    }
}

export default LogInForm
