import React, { Component, Fragment } from 'react';
import { Jumbotron, Media } from 'react-bootstrap';
import CatClicker from '../Assets/Images/catclicker.JPG';
import FeedReader from '../Assets/Images/feedreader.JPG';
import SingaporeMap from '../Assets/Images/singaporemap.JPG';
import Frogger from '../Assets/Images/frogger.JPG';
import MemoryGame from '../Assets/Images/memorygame.JPG';
import Laptop from '../Assets/Images/laptop_frame.png';
import TechEvents from '../Assets/Images/techevents.JPG';
import Awsom from '../Assets/Images/awsom.JPG';
import Voluntech from '../Assets/Images/voluntech.jpg';
import Kachingu from '../Assets/Images/kachingu.jpg';
import Healthstack from '../Assets/Images/healthstack.gif';

class Menu extends Component {
  constructor(props){
    super(props)
    this.state = {
      projects: [
        {title: "Healthstack", href:"https://performance1.d15rklx4cepfto.amplifyapp.com/", src: Healthstack, sourceCode: "", skills: ['React', 'JavaScript', 'Redux', 'AWS', 'Charts.js', 'TailwindCSS' ], text:"I built a prototype for a pre-funding healthcare startup using React and Redux to showcase product features. The application features patient dashboards and management of patient communication using AWS services."},
        {title: "Seattle Voluntech", href:"https://seattlevoluntech.sfo2.digitaloceanspaces.com/index.html#/", src: Voluntech, sourceCode: "https://github.com/super-ming/seattlevoluntech", skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Mobile First Responsive Design', 'REST APIs'], text:"This platform aims to connect small business owners in Seattle who need technical with volunteers who can provide the skills and time."},
        {title: "Kachingu", href:"https://kachingu1.herokuapp.com/", src: Kachingu, sourceCode: "https://github.com/super-ming/v8-bears-team-13", skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Mobile First Responsive Design', 'REST APIs', 'Postgresql', 'Sass'], text:"Kachingu is an income and expense tracking application."},
        {title: "Singapore Restaurants", href:"https://singapore-restaurants.herokuapp.com/", src: SingaporeMap, sourceCode: "https://github.com/super-ming/Singapore-Neighborhood-Map", skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Mobile First Responsive Design', 'REST APIs'], text:"This application uses React, Facebook Graph API, and Google Maps API to display restaurants in central Singapore."},
        {title: "AWSOM", href:"https://awsom.herokuapp.com/", src: Awsom, sourceCode: "https://github.com/super-ming/awsom-front-end", skills: ['React', 'JavaScript', 'HTML5', 'CSS3'], text:"Redesigned existing homepage for Awsom.info, as a part of Community Hack Night initiative launch at CodeFellows."},
        {title: "What is the Next Tech Event in Seattle?", href:"https://gwgtechevents.github.io/team_seattle/", src: TechEvents, sourceCode: "https://github.com/super-ming/Udacity_calendar_team", skills: ['JavaScript', 'HTML5', 'CSS3'], text:"I created the idea of building an web application to display upcoming tech events in the Seattle area and collaborated with fellow classmates."},
        {title: "Memory Card Game", href:"https://super-ming.github.io/Memory-Card/", src: MemoryGame, sourceCode: "https://github.com/super-ming/Memory-Card", skills: ['JavaScript', 'HTMl5', 'CSS3'], text:"Memory game created with JavaScript, HTML, and CSS."},
        {title: "Feed Reader", href:"https://super-ming.github.io/frontend-nanodegree-feedreader/", sourceCode: "https://github.com/super-ming/frontend-nanodegree-feedreader", skills: ['JavaScript', 'Jasmine', 'HTML5', 'CSS3'], src: FeedReader, text:"Application that provides a live feed of pages from various websites."},
        {title: "Frogger Game", href:"https://super-ming.github.io/frontend-nanodegree-arcade-game/", sourceCode: "https://github.com/super-ming/frontend-nanodegree-arcade-game", skills: ['JavaScript', 'HTML5', 'CSS3', 'Canvas'], src: Frogger, text:"Classic arcade game created with JavaScript, HTML, and CSS."},
        {title: "Cat Clicker", href:"https://super-ming.github.io/Cat-Clicker/", src: CatClicker, sourceCode: "https://github.com/super-ming/Cat-Clicker", skills: ['JavaScript', 'HTML5', 'CSS3'], text:"Cat clicking application. Click if you dare."}
      ],
      key: 0
    }
  }

  handleSelect = (key)=> {
    //Trigger fade out of current project
    document.querySelector(".project-thumbnail").classList.remove("active-project");
    document.querySelector(".project-thumbnail").classList.add("inactive-project");
    //Once current project is off-screen, swap with new project and trigger fade in
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
            {projects[activeKey].title === "Healthstack" ?
              <a href={projects[activeKey].href} style={{pointerEvents: 'none', cursor: 'default'}}>
                <img className="laptop" alt="laptop frame" src={Laptop} />
                <img className="project-thumbnail"
                   alt={projects[activeKey].title}
                   src={projects[activeKey].src} 
                   />
              </a>
              :
              <a href={projects[activeKey].href}>
                <img className="laptop" alt="laptop frame" src={Laptop} />
                <img className="project-thumbnail"
                     alt={projects[activeKey].title}
                     src={projects[activeKey].src} />
              </a>
            }
              <div className="d-flex justify-content-center nav-arrow">
                <button className="arrow-left" alt="Back arrow for previous project" onClick={this.backArrowSelect}>{backwardArrow}</button>
              </div>
              <Media.Body className="project-text">
                <h4>{projects[activeKey].title}</h4>
                <p>{projects[activeKey].text}</p>
                <p>Skills: </p>
                <p>{projects[activeKey].skills.join(', ')}</p>
                <div className="project-links d-flex justify-content-center">
                  {projects[activeKey].title === "Healthstack" ?
                    <Fragment>
                      <a href={projects[activeKey].href}>[ Demo ]</a>
                      <p style={{color: '#807e7e', fontStyle: 'italic'}}>[ Source Code ]</p>
                    </Fragment> 
                    :
                    <Fragment>
                      <a href={projects[activeKey].href}>[ Demo ]</a>
                      <a href={projects[activeKey].sourceCode}>[ Source Code ]</a>
                    </Fragment>
                  }
                </div>
              </Media.Body>
              <div className="d-flex justify-content-center nav-arrow">
                <button className="arrow-right" alt="Forward arrow for next project" onClick={this.forwardArrowSelect}>{forwardArrow}</button>
              </div>
            </Media>
          </Jumbotron>
        </div>
      </div>
    )
  }
}

export default Menu;
