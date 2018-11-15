import React, { Component } from 'react';
import { Tabs, Tab, Jumbotron, Media } from 'react-bootstrap';
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
        {title: "Singapore Restaurants", href:"https://agile-beyond-13723.herokuapp.com/", src: SingaporeMap, tools: ['React', 'JavaScript', 'Html5', 'Css3', 'Facebook'], text:"This application uses React to display restaurants in central Singapore. The locations are shown as markers on the Google Map and also as a list when the burger menu is activated. Information about the restaurant is gathered from Facebook Graph API and is displayed when either the marker or the list is clicked."},
        {title: "Cat Clicker", href:"https://super-ming.github.io/Cat-Clicker/", src: CatClicker, tools: ['JavaScript', 'Html5', 'Css3'], text:"For this project, I used HTML, CSS, and JavaScript to create an interactive application based on click events. When the user clicks on the cat photo, a sound clip is played and the click is recorded."},
        {title: "Feed Reader", href:"https://super-ming.github.io/frontend-nanodegree-feedreader/", tools: ['JavaScript', 'Html5', 'Css3'], src: FeedReader, text:"For this project, I used HTML, CSS, and JavaScript to create an application that provides a live feed of pages from Udacity."},
        {title: "Frogger Game", href:"https://super-ming.github.io/frontend-nanodegree-arcade-game/", tools: ['JavaScript', 'Html5', 'Css3'], src: Frogger, text:"This is a classic arcade game in which the user controls the character at the bottom of the screen and tries to reach the river without touching an enemy bug. In the unfortunate event of touching a bug, the character goes back to his/her original position and have to start all over again. The calculations of the movement and timing was done with JavaScript."},
        {title: "Memory Card Game", href:"https://super-ming.github.io/Memory-Card/", src: MemoryGame, tools: ['JavaScript', 'Html5', 'Css3'], text:"This is a classic memory game created with JavaScript, in which the user clicks on a card to flip it over and the timer is activated. When the player flips another card and the icons on both cards are a match, the background color of the cards changes and the icon rotates. When there is no match, the cards closes and the thumbs up icon temporarily rotates to become a thumbs down icon. The player's score and rating is determined by the time spent and number of moves needed to complete the game. The player starts with three stars. One star is removed as the player spends more time and effort on the game."},
        {title: "More...", src:"https://super-ming.github.io/Cat-Clicker/"}
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

  render() {
    const projects = this.state.projects;
    let activeKey = this.state.key;
    return(
      <div className="project-wrapper" data-aos="fade-up" data-aos-offset="400" data-aos-duration="1000">
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
            <Media className="d-flex justify-content-between mediaGroup">
              <a href={projects[activeKey].href}>
                <img alt="laptop frame" className="laptop" src={Laptop}></img>
                <img className="project-thumbnail"
                alt={projects[activeKey].title}
                src={projects[activeKey].src} />
              </a>
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
