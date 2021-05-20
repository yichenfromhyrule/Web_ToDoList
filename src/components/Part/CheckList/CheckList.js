import React, {Component} from 'react';
import "./CheckList.css";
import ToDoListDataService from "../../../services/todolist.service";
import { ListGroup, ListGroupItem, Input, Label, Button, Container, Row, Col } from 'reactstrap';

export default class CheckList extends Component {
    constructor(props) {
        super(props);
        this.refreshList = this.refreshList.bind(this);
        //this.setActiveToDo = this.setActiveTutorial.bind(this);
        //this.removeAllToDo = this.removeAllTutorials.bind(this);
        this.onDataChange = this.onDataChange.bind(this);
    
        this.state = {
          todos:[],
          currentToDo: {
              key: null,
              title: "",
              description: "",
              published: false,
          },
          currentIndex: -1,
        };
    }

    componentDidMount() {
        ToDoListDataService.getAll().on("value", this.onDataChange);
    }

    componentWillMount() {
        ToDoListDataService.getAll().off("value", this.onDataChange);
    }

    onDataChange(items){
        let todos = [];
    
        items.forEach((item) => {
          let key = item.key;
          let data = item.val();
          todos.push({
            key: key,
            title: data.title,
            description: data.description,
            published: data.published,
          });
        });
    
        this.setState({
          todos: todos,
        });
    }

    refreshList() {
        this.setState({
          currentToDo: null,
          currentIndex: -1,
        });
    }

    deleteItem(){
        console.log(this.state.currentToDo);
        ToDoListDataService.delete(this.state.currentToDo.key)
        .then(() => {
            this.props.refreshList();
        })
        .catch((e) => {
            console.log(e);
        })
    }
    render(){
        const {todos} = this.state;
        return (
            <div>
                <ListGroup flush>    
                    {todos &&
                        todos.map((todos, index)=>(
                                    <ListGroupItem>
                                        <>
                                            <Row>   
                                                <Label sm={6}>{todos.title}</Label>   
                                                    <Col xs="2">
                                                        <Button onClick={() => this.deleteItem}>Delete</Button>
                                                    </Col>
                                                </Row>
                                            
                                            </>
                                        </ListGroupItem>
                                    
                        ))
                    }   
                </ListGroup>
            </div>
        )
    }
}

