import React, {Component} from 'react';
import "./CheckList.css";
import ToDoListDataService from "../../../services/todolist.service";

export default class CheckList extends Component {
    constructor(props) {
        super(props);
        this.refreshList = this.refreshList.bind(this);
        //this.setActiveToDo = this.setActiveTutorial.bind(this);
        //this.removeAllToDo = this.removeAllTutorials.bind(this);
        this.onDataChange = this.onDataChange.bind(this);
    
        this.state = {
          todos:[],
          currentToDo: null,
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


    render(){
        const {todos} = this.state;
        return (
            <div className="checkList_Container">
                <div className="checkList_TodoList_Container">
                    <div className="list row">
                        <div className="col-md-6">
                            <ul className="list-group">
                                {todos &&
                                    todos.map((todos, index)=>(
                                        <li>
                                            {todos.title}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            
        </div>
    )
    }
}

