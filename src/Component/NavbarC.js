import React from 'react';
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import img1 from '../img/mackbookrepair.png'

export default function NavbarC() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container >
                    <Navbar.Brand as={Link} to="/">
                        <img
                            alt=""
                            src={img1}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Macbook Repair kolkata 
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link className='nav-link' as={Link} to="/" active>HOME</Nav.Link>
                            <Nav.Link as={Link} to="/service"active >SERVICES</Nav.Link>
                            <Nav.Link as={Link} to="/booknow" active>BOOKNOW</Nav.Link>
                            <NavDropdown title="REPAIR" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/iphonerepair">iphone Repair</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/ipadrepair">ipad Repair</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/macbookrepair">Macbook Repair</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="ABOUT" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/calltoaction">Our Story</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/aboutus">About Us</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/faq">Faq</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/tandc">Terms & Condition</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
