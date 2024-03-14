import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { AuthContext } from "./../../context/auth.context"
import Logo from "./../../images/Logo.png"
import "./NavBar.css"

function NavBar() {

  const { user, isLoggedIn, logout } = useContext(AuthContext)


  return (

    <Navbar expand="lg" className='NavBar'>

      <Navbar.Brand href="/">
        <img src={Logo} alt="logo" />
      </Navbar.Brand>

      <Navbar.Collapse className='navBarTags'>

        <NavDropdown title="Destinations">
          <NavDropdown.Item as={Link} to="/travels/Europe">Europe</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/travels/Asia">Asia</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/travels/Africa">Africa</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/travels/North America">North America</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/travels/South America">South America</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/travels/Australia & Oceania">Australia & Oceania</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/travels/All"><strong>All destinations</strong></NavDropdown.Item>

        </NavDropdown>

        <Link to="/reviews">
          <Nav.Link as="span">Your Experience</Nav.Link>
        </Link>
        <Link to="/about-us">
          <Nav.Link as="span">About Us</Nav.Link>
        </Link>

        {
          isLoggedIn && (
            <>
              <Link to={`/users/${user.username}`}>
                <Nav.Link as="span">Profile</Nav.Link>
              </Link>
              {
                user.role === "admin"
                  ?
                  (
                    <Link to="/create-travel">
                      <Nav.Link as="span">Create Travel</Nav.Link>
                    </Link>
                  )
                  :
                  null
              }
              <Link onClick={logout}>
                <Nav.Link as="span">Log Out</Nav.Link>
              </Link>
            </>
          )
        }
        {
          !isLoggedIn &&
          (
            <>
              <Link to="/signup">
                <Nav.Link as="span">Sign up</Nav.Link>
              </Link>
              <Link to="/login">
                <Nav.Link as="span">Log In</Nav.Link>
              </Link>
            </>
          )
        }

      </Navbar.Collapse>

    </Navbar >

  )
}

export default NavBar