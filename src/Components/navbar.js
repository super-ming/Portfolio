import React, { Component }  from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

class NavBar extends Component {
  componentDidMount() {
    document.querySelector(".project-nav").addEventListener('click', () => {
      document.querySelector("#projects").focus();
    });

    document.querySelector(".about-nav").addEventListener('click', () => {
      document.querySelector("#about-me").focus();
    });
  }

  render() {
    return (
      <Navbar fixed="top" className="header-navbar" expand={"md"}>
        <Navbar.Brand href="#" className="logo"><h1>MH</h1></Navbar.Brand>
        <div className="nav d-flex navlink">
          <Nav className="header-nav">
            <NavItem>
              <Nav.Link className="project-nav" href="#projects" data-aos="fade-down" data-aos-delay="1850" data-aos-duration="1000"><h5>Projects</h5></Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link className="blog" href="https://medium.com/@superming" data-aos="fade-down" data-aos-delay="2100" data-aos-duration="1000"><h5>Blog</h5></Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link className="about-nav" href="#about-me" data-aos="fade-down" data-aos-delay="2350" data-aos-duration="1000"><h5>About</h5></Nav.Link>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    )
  }
};

export default NavBar;
