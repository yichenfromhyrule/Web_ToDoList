import React, {useState} from 'react';
import './../../App.css';
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
import Footer from '../../components/Footer/Footer';
import Part from '../../components/Part/Part';
import './Home.css';
import HomeNavbar from '../Navbar/Navbar';

function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className="App">
            <HomeNavbar />

            <Part />
            <Footer />
        </div>
    )
}

export default Home
