import {database} from "../firebase";

const db = database.ref("/todolist");

class ToDoListDataService {
    getAll(){
        return db;
    }

    create(todo) {
        return db.push(todo);
    }

    update(key, value) {
        return db.child(key).update(value);
    }
    
    delete(key) {
        return db.child(key).remove();
    }
    
    deleteAll() {
        return db.remove();
    }
}

export default new ToDoListDataService();