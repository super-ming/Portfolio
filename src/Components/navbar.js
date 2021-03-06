import React, { Component }  from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

class NavBar extends Component {
  componentDidUpdate() {
    //Update focus as CSS smooth scrolling does not automatically update focus to the scrolled location
    document.querySelector("#project-nav").addEventListener('click', () => {
      document.querySelector("#projects").focus();
    });

    document.querySelector("#about-nav").addEventListener('click', () => {
      document.querySelector("#about-me").focus();
    });
  }

  render() {
    return (
      <Navbar fixed="top" className="header-navbar">
        <Navbar.Brand href="#" className="logo"><h1>MH</h1></Navbar.Brand>
        <div className="nav d-flex navlink">
          <Nav className="header-nav">
            <NavItem>
              <Nav.Link id="project-nav" className="project-nav" href="#projects"><h5>Projects</h5></Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link className="blog" href="https://medium.com/@superming"><h5>Blog</h5></Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link id="about-nav" className="about-nav" href="#about-me"><h5>About</h5></Nav.Link>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    )
  }
};

export default NavBar;
