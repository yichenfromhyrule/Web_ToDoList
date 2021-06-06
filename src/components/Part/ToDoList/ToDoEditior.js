import React, {Component} from 'react';
import "./ToDoStyle.css";
import ToDoListDataService from "../../../services/todolist.service";
import { 
    Col, 
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input,
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

        this.handleClickDropDown = this.handleClickDropDown.bind(this);
    }

    handleClickDropDown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
        console.log(this.state.dropdownOpen);
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
            <div className="ToDo_Editer_Body">
                <div className="ToDo_Editer_Container">
                <Form>
                    {this.state.submitted ? (
                        <div>
                            <div>
                                <label>Add a new plan?</label>
                            </div>
                            <div>
                                <Button color="primary" onClick={() => this.newToDo()}>
                                    ADD
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <>
                                <FormGroup row>
                                    <Label for="nameToDo" sm={2}>
                                        Task
                                    </Label>
                                    <Col sm={8}>
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
                                    <Col sm={2} style={{ display: 'flex', justifyContent: 'flex-end' }}>

                                    
                                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.handleClickDropDown} >
                                        <DropdownToggle caret color="primary">
                                            Priority
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem>High</DropdownItem>
                                            <DropdownItem>Normal</DropdownItem>
                                            <DropdownItem>Low</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
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

