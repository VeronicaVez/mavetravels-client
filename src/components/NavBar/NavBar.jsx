import React from 'react'
import "./NavBar.css"

import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'


function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Destinations" id="basic-nav-dropdown">
              <NavDropdown title="Asia" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Thailandia</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Africa" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Namibia</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="America" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Brasil</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Argentina</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Europe" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Spain</NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
            <Nav.Link href="/reviews">Your Experience</Nav.Link>
            <Nav.Link href="/login">Log In</Nav.Link>
            <Nav.Link href="/signup">Sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar