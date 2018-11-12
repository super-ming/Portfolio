import React from 'react';
import { Nav, Navbar, NavItem, IconButton } from 'react-bootstrap'
import { ReactComponent as Github } from '../Assets/Icons/github.svg'
import { ReactComponent as LinkedIn } from '../Assets/Icons/linkedin.svg'

const Footer = (props) => {
  //<IconButton>
    //<i className="material-icons">menu</i>
  //</IconButton>
  return (
    <Navbar className="navbar justify-content-center" bg="light" variant="dark" expand="lg">
        <Nav className="social-icons" justify="true">
          <Nav.Link href="https://github.com/super-ming"><Github /></Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/mingyho"><LinkedIn fill="#0077B5"/></Nav.Link>
        </Nav>

    </Navbar>
  )
};

export default Footer;
