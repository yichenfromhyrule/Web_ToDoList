import React, {Component} from 'react';
import "./CheckList.css";
import ToDoListDataService from "../../../services/todolist.service";

export default class CheckList extends Component {
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
        return (
            <div className="checkList_Container">
                <div className="checkList_Check_Box_Container"></div>
                <div className="checkList_Button_Container">
                    {this.state.submitted ? (
                        <div>
                            <button className="checkList_Edit_Button" onClick={this.newToDo}>
                                ADD
                            </button>
                        </div>
                    ) : (
                        <div>
                            <input
                                type="text"
                                id="title"
                                required
                                value={this.state.title}
                                onChange={this.onChangeToDoTitle}
                                name="title"
                            />
                            <input
                                type="text"
                                id="description"
                                required
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                                name="description"
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

