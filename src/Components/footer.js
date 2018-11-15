import React from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import { ReactComponent as Github } from '../Assets/Icons/github.svg'
import { ReactComponent as LinkedIn } from '../Assets/Icons/linkedin.svg'

//from https://github.com/danklammer/bytesize-icons
const email = <svg alt="Email" id="i-mail" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="black" strokeLinecap="round" stroke-linejoin="round" stroke-width="2">
    <path d="M2 26 L30 26 30 6 2 6 Z M2 6 L16 16 30 6" /></svg>

const Footer = (props) => {
  return (
    <Navbar className="justify-content-center footer" bg="light" variant="light" expand="lg">
        <div className="attribution" >
          <a href="https://www.freepik.com/free-photos-vectors/background">Background vector created by Kjpargeter - Freepik.com</a>
        </div>
        <Nav className="social-icons" justify="true">
          <Nav.Link href="https://github.com/super-ming"><Github alt="Github" /></Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/mingyho"><LinkedIn fill="#0077B5" alt="LinkedIn" /></Nav.Link>
          <Nav.Link href="mailto:mingyho@gmail.com">{email}</Nav.Link>
        </Nav>
    </Navbar>
  )
};

export default Footer;
