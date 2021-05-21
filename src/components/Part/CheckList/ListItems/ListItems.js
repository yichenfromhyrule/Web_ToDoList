import React, { Component } from 'react';
import ToDoListDataService from "../../../../services/todolist.service";

export default class ListItems extends Component {
    constructor(props){
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
        this.state = {
            currentItem: {
                key: null,
                title: "",
                description: "",
                published: false,
            }
        }
    }

    deleteItem(){
        ToDoListDataService.delete(this.state.currentItem)
        .catch((e) => {
            console.log(e);
        });
    }

    render() {
        const {currentItem} = this.state;
        return (
            <div>
            <p>
                {currentItem.title}
            </p>
            <button onclick={this.deleteItem}>
                Delete
            </button>
            </div>
        );
    }
    
}


