import React from 'react';
import { Nav, NavItem, Tabs, Tab, Jumbotron } from 'react-bootstrap';

const Menu = (props) => {
  return(
    <div>
      <Tabs className="project-bar">
        <Tab eventKey="project1" title="Project1"></Tab>
        <Tab eventKey="project2" title="Project2"></Tab>
        <Tab eventKey="project3" title="Project3"></Tab>
      </Tabs>
      <Jumbotron className="jumbotron">
      </Jumbotron>
    </div>
  )
}

export default Menu;
