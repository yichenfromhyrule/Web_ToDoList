import React, {Component} from 'react';
import ToDoListDataService from "../../../services/todolist.service";
import { ListGroup, ListGroupItem, Input, Label, Button, Container, Row, Col } from 'reactstrap';


export default class ToDo extends Component {
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
        function handleRemove(key){
            console.log(key);
            ToDoListDataService.delete(key)
            .catch((e) => {
                console.log(e);
            });
        }
        return (
            <div>
                <ListGroup flush>    
                    {todos &&
                        todos.map((item)=>(
                            <ListGroupItem>
                                <Row key={item.key}>   
                                    <Label sm={8}>{item.title}</Label>
                                    <Button onClick={() => handleRemove(item.key)}>
                                        Remove
                                    </Button>           
                                </Row>
                            </ListGroupItem>
                                    
                        ))
                    }   
                </ListGroup>
            </div>
        )
    }
}

