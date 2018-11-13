import React, { Component } from 'react';
import { Tabs, Tab, Jumbotron, Media } from 'react-bootstrap';

class Menu extends Component {
  constructor(props){
    super(props)
    this.state = {
      projects: [
        {title: "Singapore Restaurants", src:"https://agile-beyond-13723.herokuapp.com/", text:"This application uses React to display restaurants in central Singapore. The locations are shown as markers on the Google Map and also as a list when the burger menu is activated. Information about the restaurant is gathered from Facebook Graph API and is displayed when either the marker or the list is clicked."},
        {title: "Cat Clicker", src:"https://super-ming.github.io/Cat-Clicker/", text:"For this project, I used HTML, CSS, and JavaScript to create an interactive application based on click events. When the user clicks on the cat photo, a sound clip is played and the click is recorded."},
        {title: "Feed Reader", src:"https://super-ming.github.io/frontend-nanodegree-feedreader/", text:"For this project, I used HTML, CSS, and JavaScript to create an application that provides a live feed of pages from Udacity."},
        {title: "Frogger Game", src:"https://super-ming.github.io/frontend-nanodegree-arcade-game/", text:"This is a classic arcade game in which the user controls the character at the bottom of the screen and tries to reach the river without touching an enemy bug. In the unfortunate event of touching a bug, the character goes back to his/her original position and have to start all over again. The calculations of the movement and timing was done with JavaScript"},
        {title: "Memory Card Game", src:"https://super-ming.github.io/Memory-Card/", text:"This is a classic memory game, in which the user clicks on a card to flip it over and the timer is activated. When the player flips another card and the icons on both cards are a match, the background color of the cards changes and the icon rotates. When there is no match, the cards closes and the thumbs up icon temporarily rotates to become a thumbs down icon. The player's score and rating is determined by the time spent and number of moves needed to complete the game. The player starts with three stars. One star is removed as the player spends more time and effort on the game."},
        {title: "More...", src:"https://super-ming.github.io/Cat-Clicker/"}
      ],
      activeProject: [],
      key: 0
    }
  }

  handleSelect = (key)=> {
    this.setState({ key })
  }

  render() {
    const projects = this.state.projects;
    let activeKey = this.state.key;
    return(
      <div className="project-wrapper">
        <div id="projects" className="projects">
          <h3>Projects</h3>
        </div>
        <div className="d-flex justify-content-center project-main">
          <Tabs
            className="project-bar justify-content-center"
            activeKey={this.state.key}
            onSelect={this.handleSelect}
            variant="pills">
            { projects && (projects.map((project,index) =>
              <Tab
                eventKey={index}
                key={index}
                title={projects[index].title} />
            ))}
          </Tabs>
        </div>
        <div class="jumbo-wrapper">
          <Jumbotron>
            <Media className="d-flex justify-content-between mediaGroup">
              <img className="project-thumbnail"
                alt={projects[activeKey].title}
                src={projects[activeKey].src} />
              <Media.Body className="text">
                <h5>{projects[activeKey].title}</h5>
                <p className="text">{projects[activeKey].text}</p>
              </Media.Body>
            </Media>
          </Jumbotron>
        </div>
      </div>
    )
  }
}

export default Menu;
