import React, { Component }  from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

class NavBar extends Component {
  componentDidMount() {
    this.projectNav.addEventListener('click', () => {
      if(window.innerWidth > 901){
        window.scroll({
          top: 1700,
          left: 0,
          behavior: 'smooth'
        });
      } else {
        window.scroll({
          top: 1200,
          left: 0,
          behavior: 'smooth'
        });
      }
    });

    this.aboutNav.addEventListener('click', () => {
      if(window.innerWidth > 901){
        window.scroll({
          top: 750,
          left: 0,
          behavior: 'smooth'
        });
      } else {
        window.scroll({
          top: 650,
          left: 0,
          behavior: 'smooth'
        });
      }
    });
  }

  render() {
    return (
      <Navbar fixed="top" className="header-navbar" expand={"md"}>
        <Navbar.Brand href="#" className="logo"><h1>MH</h1></Navbar.Brand>
        <div className="nav d-flex navlink">
          <Nav className="header-nav">
            <NavItem>
              <div className="project-nav" ref={(ref)=> this.projectNav = ref}><h5>Projects</h5></div>
            </NavItem>
            <NavItem>
              <Nav.Link className="blog" href="https://medium.com/@superming"><h5>Blog</h5></Nav.Link>
            </NavItem>
            <NavItem>
              <div className="about" ref={(ref)=> this.aboutNav = ref}><h5>About</h5></div>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    )
  }
};

export default NavBar;
