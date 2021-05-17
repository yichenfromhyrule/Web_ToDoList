import React from 'react';
import "./Part.css";
import { 
    Collapse, 
    Container,
    Col,
    Navbar, 
    NavbarToggler, 
    NavbarBrand, 
    Nav, 
    NavItem, 
    NavLink, 
    NavbarText,
    Row,
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle, 
    Button
} from 'reactstrap';
import Comments from "./Comments/Comments";
import CheckList from "./CheckList/CheckList";
import CheckListEditer from "./CheckList/CheckListEditer";

function Part() {
    return (
        <div className="partContainer">
            <Row>
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
                            <CardTitle tag="h5">Check List</CardTitle>
                            <div className="checkListContainer">
                                <CheckList />
                            </div>    
                        </Card>
                    </Row>
                    <Row>
                        <Card body>
                            <CardTitle tag="h5">Special Title Treatment</CardTitle>
                            <CheckListEditer />
                        </Card>
                    </Row>
                    
                </Col>
            </Row>  
        </div>
    )
}

export default Part
