import React, {Component, useState} from 'react';
import "./ToDoStyle.css";
import ToDoListDataService from "../../../services/todolist.service";
import { 
    Col, 
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    FormText,
    Dropdown, 
    DropdownToggle, 
    DropdownMenu, 
    DropdownItem
} from 'reactstrap';

export default class ToDoEditior extends Component {
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
          dropdownOpen: false,
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
        
        //const toggle = () => setDropdownOpen(prevState => !prevState);
        return (
            <div className="ToDo_Editer_Body">
                <div className="ToDo_Editer_Container">
                <Form>
                    {this.state.submitted ? (
                        <div>
                            <div>
                                <label>What is your plan?</label>
                            </div>
                            <div>
                                <button className="ToDo_Editer_Button" onClick={this.newToDo}>
                                    ADD
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <>
                                <FormGroup row>
                                    <Label for="priorityToDo" sm={2}>
                                        Priority
                                    </Label>
                                    <Dropdown>
                                        <DropdownToggle caret>
                                            Dropdown
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem>
                                                High
                                            </DropdownItem>
                                            <DropdownItem>
                                                Medium
                                            </DropdownItem>
                                            <DropdownItem>
                                                Low
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                    <Label for="nameToDo" sm={2}>
                                        Task
                                    </Label>
                                    <Col sm={5}>
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
                                            placeholder="with a placeholder"
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

