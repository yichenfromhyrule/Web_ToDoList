import React, {Component} from 'react';
import "./CheckList.css";
import { Button } from 'react-bootstrap';
import ToDoListDataService from "../../../services/todolist.service";

export default class CheckListEditer extends Component {
    constructor(props) {
        super(props);
        this.onChangeToDoTitle = this.onChangeToDoTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.saveToDo = this.saveToDo.bind(this);
        this.newToDo = this.newToDo.bind(this);
    
        this.state = {
          title: "",
          description: "",
          published: false,
          submitted: false,
        };
    }


    onChangeToDoTitle(e) {
        this.setState({
            title: e.target.value,
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value,
        });
    }

    saveToDo(){
        let data = {
            title: this.state.title,
            description: this.state.description,
            published: false
        };
        ToDoListDataService.create(data)
            .then(() => {
                console.log("Created new item successfully!");
                this.setState({
                    submitted: true,
                });
            })
            .catch((e) => {
                console.log(e);
            });
    }

    newToDo(){
        this.setState({
            title: "",
            description: "",
            published: false,
            submitted: false,
        });
    }

    render(){
        const {todos} = this.state;
        return (
            <div className="checkList_Editer_Body">
                <div className="checkList_Editer_Container">
                    {this.state.submitted ? (
                        <div>
                            <div>
                                <label>What is your plan?</label>
                            </div>
                            <div>
                                <button className="checkList_Editer_Button" onClick={this.newToDo}>
                                    ADD
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <label>To Do Task: </label>
                            <input
                                type="text"
                                id="title"
                                required
                                value={this.state.title}
                                onChange={this.onChangeToDoTitle}
                                name="title"
                                className="checkList_Editer_Title"
                            />
                            <label>Task Details: </label>
                            <input
                                type="text"
                                id="description"
                                required
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                                name="description"
                                className="checkList_Editer_Title"
                            />
                            <button onClick={this.saveToDo} className="btn btn-success">
                                Submit
                            </button>
                        </div>
                    )}   
                </div>
        </div>
    )
    }
}

