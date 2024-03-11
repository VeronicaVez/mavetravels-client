import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { AuthContext } from "./../../context/auth.context"
import Logo from "./../../images/Logo.png"

import TravelsPage from '../../pages/TravelsPage/TravelsPage'
import "./NavBar.css"

function NavBar() {

  const { user, logout } = useContext(AuthContext)


  return (
    <div className="NavBar">

    <Navbar expand="lg" className="NavBar">

      <Container>

        <Link to="/">
          <img src={Logo} alt="logo"/>
        </Link>

        <Nav>
          <NavDropdown title="Destinations">
            <NavDropdown.Item >Europe</NavDropdown.Item>
            <NavDropdown.Item >Asia</NavDropdown.Item>
            <NavDropdown.Item >Africa</NavDropdown.Item>
            <NavDropdown.Item >North America</NavDropdown.Item>
            <NavDropdown.Item >South America</NavDropdown.Item>
            <NavDropdown.Item >Australia & Oceania</NavDropdown.Item>
            <Link to="/travels">
              <NavDropdown.Item as="span"><strong>All destinations</strong></NavDropdown.Item>
            </Link>
          </NavDropdown>

          <Link to="/reviews">
            <Nav.Link as="span">Your Experience</Nav.Link>
          </Link>

          {
            user
              ?
              <>
                <Link to={`/users/${user.username}`}>
                  <Nav.Link as="span">Profile</Nav.Link>
                </Link>
                <Link onClick={logout}>
                  <Nav.Link as="span">Log Out</Nav.Link>
                </Link>
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
      </Container>
      </Navbar >
      </div>

  )
}

export default NavBar