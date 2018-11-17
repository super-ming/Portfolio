import React, { Component }  from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

class NavBar extends Component {
  componentDidMount() {
    [this.projectNav, this.aboutNav].forEach(element => {
      if(element === this.projectNav){
        element.addEventListener('click', ()=> {
          window.scroll({
            top: 1400,
            left: 0,
            behavior: 'smooth'
          });
        });
      } else if(element === this.aboutNav){
        element.addEventListener('click', ()=> {
          window.scroll({
            top: 750,
            left: 0,
            behavior: 'smooth'
          });
        });
      }
    })
  }

  render() {
    return (
      <Navbar fixed="top" className="header-navbar" expand={"lg"}>
        <Navbar.Brand href="#home" className="logo"><h1>MH</h1></Navbar.Brand>
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
