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
        this.refreshList = this.refreshList.bind(this);
        //this.setActiveToDo = this.setActiveTutorial.bind(this);
        //this.removeAllToDo = this.removeAllTutorials.bind(this);
        this.onDataChange = this.onDataChange.bind(this);
    
        this.state = {
          title: "",
          description: "",
          published: false,
          submitted: false,
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
            <div className="checkList_Container">
                <div className="checkList_Check_Box_Container">
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
                
                <div className="checkList_Editer_Container">
                    {this.state.submitted ? (
                        <div>
                            <button className="checkList_Editer_Button" onClick={this.newToDo}>
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

