import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import Container from 'react-bootstrap/lib/Container'

const NavBar = (props) => {
  //<IconButton>
    //<i className="material-icons">menu</i>
  //</IconButton>
  return (
    <Navbar className="navbar" fixed="top" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home"><h1>Ming Ho</h1></Navbar.Brand>
        <div className="nav d-flex ml-auto">
          <Nav>
            <NavItem>
              <Nav.Link><h5>Portfolio</h5></Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link><h5>Blog</h5></Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link><h5>About</h5></Nav.Link>
            </NavItem>
          </Nav>
        </div>

    </Navbar>
  )
};

export default NavBar;
