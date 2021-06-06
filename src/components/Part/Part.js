import React from 'react';
import "./Part.css";
import {
    Col,
    Row,
    Card, 
    CardText,
    CardTitle, 
    Button
} from 'reactstrap';
import ToDoList from "./ToDoList/ToDoList";
import ToDoEditior from "./ToDoList/ToDoEditior";

function Part() {
    return (
        <div className="partContainer">
            <div className="row no-gutters">
                <Col sm="4">
                    <Card body>
                        <CardTitle tag="h5">Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Go somewhere</Button>
                    </Card>
                </Col>
                <Col sm="8">
                    <Row>
                        <Card body>
                                <ToDoEditior />
                        </Card>
                    </Row>
                    <Row>
                        <Card body>
                            <CardTitle tag="h5">Check List</CardTitle>
                            <div className="ToDoContainer">
                                      <ToDoList />
                            </div>    
                        </Card>
                    </Row>
                    
                </Col>
            </div>  
        </div>
    )
}

export default Part
