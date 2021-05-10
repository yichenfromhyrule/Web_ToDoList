import React, {Component} from 'react';
import "./CheckList.css";
import ToDoListDataService from "../../../services/todolist.service";
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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
                <Form>
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
                            <>
                                <FormGroup row>
                                    <Label for="nameToDo" sm={2}>
                                        Task
                                    </Label>
                                    <Col sm={10}>
                                        <Input 
                                            type="text" 
                                            name="title" 
                                            id="title" 
                                            placeholder="with a placeholder" 
                                            value={this.state.title}
                                            onChange={this.onChangeToDoTitle}
                                            required
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="desToDo" sm={2}>
                                        Details
                                    </Label>
                                    <Col sm={10}>
                                        <Input
                                            type="text"
                                            id="description"
                                            required
                                            value={this.state.description}
                                            onChange={this.onChangeDescription}
                                            name="description"
                                        />
                                    </Col>
                                </FormGroup>
                            </>
                            <Button onClick={this.saveToDo}>
                                Submit
                            </Button>
                            
                        </div>
                    )}   
                </Form>
                </div>
        </div>
    )
    }
}

