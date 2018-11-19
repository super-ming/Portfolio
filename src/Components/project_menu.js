import React, { Component } from 'react';
import { Jumbotron, Media } from 'react-bootstrap';
import CatClicker from '../Assets/Images/catclicker.JPG';
import FeedReader from '../Assets/Images/feedreader.JPG';
import SingaporeMap from '../Assets/Images/singaporemap.JPG';
import Frogger from '../Assets/Images/frogger.JPG';
import MemoryGame from '../Assets/Images/memorygame.JPG';
import Laptop from '../Assets/Images/laptop_frame.png';

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
    const forwardArrow =  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fillRule="evenodd" clipRule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-3 5.753l6.44 5.247-6.44 5.263.678.737 7.322-6-7.335-6-.665.753z"/></svg>
    const backwardArrow = <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fillRule="evenodd" clipRule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm3 5.753l-6.44 5.247 6.44 5.263-.678.737-7.322-6 7.335-6 .665.753z"/></svg>
    return(
      <div className="project-wrapper d-flex justify-content-center" data-aos="fade-up" data-aos-offset={window.innerWidth < 600 ? 200 : (400)} data-aos-duration="1000">
        <div id="projects" className="projects">
          <h3>Projects</h3>
        </div>
        <div className="jumbo-wrapper">
          <Jumbotron>
            <Media className="d-flex justify-content-center mediaGroup">
              <a href={projects[activeKey].href}>
                <img className="laptop" alt="laptop frame" src={Laptop} />
                <img className="project-thumbnail"
                     alt={projects[activeKey].title}
                     src={projects[activeKey].src} />
              </a>
              <div className="d-flex justify-content-center nav-arrow">
                <button className="arrow-left" alt="Back arrow for previous project" onClick={this.backArrowSelect}>{backwardArrow}</button>
                <button className="arrow-right" alt="Forward arrow for next project" onClick={this.forwardArrowSelect}>{forwardArrow}</button>
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
