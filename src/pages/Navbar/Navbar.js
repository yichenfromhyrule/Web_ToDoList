import React, {useState} from 'react';
import { 
    Collapse, 
    Navbar, 
    NavbarToggler, 
    NavbarBrand, 
    Nav, 
    NavItem, 
    NavLink
} from 'reactstrap';


function HomeNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">猪猪家记事</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink>Log Out</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Invite Family Members</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default HomeNavbar
