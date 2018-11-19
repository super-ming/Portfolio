import React from 'react';
import { Nav, Navbar, Row } from 'react-bootstrap'
import { ReactComponent as Github } from '../Assets/Icons/github.svg'
import { ReactComponent as LinkedIn } from '../Assets/Icons/linkedin.svg'

//from https://github.com/danklammer/bytesize-icons
const email = <svg alt="Email" id="i-mail" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
    <path d="M2 26 L30 26 30 6 2 6 Z M2 6 L16 16 30 6" /></svg>

const Footer = (props) => {
  return (
    <Navbar className="d-flex justify-content-center align-items-center">
      <Nav className="social-icons" >
        <Row className="d-flex justify-content-center row">
          <Nav.Link href="https://github.com/super-ming"><Github alt="Github" /></Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/mingyho"><LinkedIn fill="#0077B5" alt="LinkedIn" /></Nav.Link>
          <Nav.Link href="mailto:mingyho@gmail.com">{email}</Nav.Link>
        </Row>
      </Nav>
    </Navbar>
  )
};

export default Footer;
