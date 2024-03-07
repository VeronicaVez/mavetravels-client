import React from 'react'
import "./NavBar.css"

import { Link } from "react-router-dom"
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useContext } from 'react'
import { AuthContext } from "./../../context/auth.context"


function NavBar() {

  const { user, logout } = useContext(AuthContext)

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Link to="/">
              <Nav.Link as="span">Home</Nav.Link>
            </Link>

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

            <Link to="/reviews">
              <Nav.Link as="span">Your Experience</Nav.Link>
            </Link>

            {
              user
                ?
                <>
                  <h1>holi</h1>
                </>
                :
                <>
                  <Link to="/signup">
                    <Nav.Link as="span">Sign up</Nav.Link>
                  </Link>
                  <Link to="/login">
                    <Nav.Link as="span">Log In</Nav.Link>
                  </Link>
                </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar