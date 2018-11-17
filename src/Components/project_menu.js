import React, { Component } from 'react';
import { Tabs, Tab, Jumbotron, Media } from 'react-bootstrap';
import CatClicker from '../Assets/Images/catclicker.JPG';
import FeedReader from '../Assets/Images/feedreader.JPG';
import SingaporeMap from '../Assets/Images/singaporemap.JPG';
import Frogger from '../Assets/Images/frogger.JPG';
import MemoryGame from '../Assets/Images/memorygame.JPG';
import Laptop from '../Assets/Images/laptop_frame.png';
import { ReactComponent as ArrowRight } from '../Assets/Icons/arrowright.svg';
import { ReactComponent as ArrowLeft } from '../Assets/Icons/arrowleft.svg';

class Menu extends Component {
  constructor(props){
    super(props)
    this.state = {
      projects: [
        {title: "Singapore Restaurants", href:"https://agile-beyond-13723.herokuapp.com/", src: SingaporeMap, tools: ['React', 'JavaScript', 'Html5', 'Css3', 'Facebook'], text:"This application uses React, Facebook Graph API, and Google Maps API to display restaurants in central Singapore."},
        {title: "Cat Clicker", href:"https://super-ming.github.io/Cat-Clicker/", src: CatClicker, tools: ['JavaScript', 'Html5', 'Css3'], text:"Cat clicking application. Click if you dare."},
        {title: "Feed Reader", href:"https://super-ming.github.io/frontend-nanodegree-feedreader/", tools: ['JavaScript', 'Html5', 'Css3'], src: FeedReader, text:"Application that provides a live feed of pages from various websites."},
        {title: "Frogger Game", href:"https://super-ming.github.io/frontend-nanodegree-arcade-game/", tools: ['JavaScript', 'Html5', 'Css3'], src: Frogger, text:"This is a classic arcade game created with JavaScript, HTML, and CSS."},
        {title: "Memory Card Game", href:"https://super-ming.github.io/Memory-Card/", src: MemoryGame, tools: ['JavaScript', 'Html5', 'Css3'], text:"This is a memory game created with JavaScript, HTML, and CSS."}
      ],
      activeProject: [],
      key: 0
    }
  }

  handleSelect = (key)=> {
    document.querySelector(".project-thumbnail").classList.remove("active-project");
    document.querySelector(".project-thumbnail").classList.add("inactive-project");
    setTimeout(()=>{
      document.querySelector(".project-thumbnail").classList.remove("inactive-project");
      this.setState({ key }, this.changeView)
    },500)
  }

  changeView = () => {
    document.querySelector(".project-thumbnail").classList.add("active-project");
  }

  forwardArrowSelect = () => {
    let newKey = this.state.key;
    if(this.state.key < 4){
      newKey += 1;
      this.handleSelect(newKey);
    } else {
      this.handleSelect(0);
    }
  }

  backArrowSelect = () => {
    let newKey = this.state.key;
    if(this.state.key > 0){
      newKey -= 1;
      this.handleSelect(newKey);
    } else {
      this.handleSelect(4);
    }
  }

  render() {
    const projects = this.state.projects;
    let activeKey = this.state.key;
    return(
      <div className="project-wrapper" data-aos="fade-up" data-aos-offset={window.innerWidth < 600 ? 400 : (200)} data-aos-duration="1000">
        <div id="projects" className="projects">
          <h3>Projects</h3>
        </div>
        <div className="d-flex justify-content-center project-main">
          <Tabs
            className="project-tabs justify-content-center"
            activeKey={this.state.key}
            onSelect={this.handleSelect}
            variant="pills">
            { projects && (projects.map((project, index) =>
              <Tab
                eventKey={index}
                key={index}
                title={projects[index].title} />
            ))}
          </Tabs>
        </div>
        <div className="jumbo-wrapper">
          <Jumbotron>
            <Media className="justify-content-between mediaGroup">
              <a href={projects[activeKey].href}>
                <img alt="laptop frame" className="laptop" src={Laptop}></img>
                <img className="project-thumbnail"
                alt={projects[activeKey].title}
                src={projects[activeKey].src} />
              </a>
              <div className="d-flex justify-content-center nav-arrow">
                <ArrowLeft className="arrow-left" width="34" onClick={this.backArrowSelect}/>
                <ArrowRight className="arrow-right" width="34" onClick={this.forwardArrowSelect}/>
              </div>
              <Media.Body className="project-text">
                <h4>{projects[activeKey].title}</h4>
                <p>{projects[activeKey].text}</p>
              </Media.Body>
            </Media>
          </Jumbotron>
        </div>
      </div>
    )
  }
}

export default Menu;
