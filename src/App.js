import React, { Component } from 'react';
import './Styles/styles.css'
import Navbar from './Components/navbar';
import Menu from './Components/project_menu';
import AboutMe from './Components/aboutme';
import Photo from './Assets/Images/ming.jpg';
import SplitText from 'react-pose-text';

const charPoses = {
exit: { opacity: 0, y: 20 },
enter: {
  opacity: 1,
  y: 0,
  delay: ({ charIndex }) => charIndex * 70
}};

class App extends Component {

  render() {
    return (
      <div className="App">
        <nav className="App-header">
          <Navbar className="navbar" />
        </nav>
        <section className="d-flex justify-content-center align-items-center intro">
          <h2 className="mb-0">
            <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
              Ming Ho, Front End Web Developer
            </SplitText>
          </h2>
          <span className="underline"/>
        </section>
        <main className="main-section">
          <img src={Photo} alt="Ming Ho" className="profile-photo"/>
          <AboutMe />
          <hr className="line"></hr>
          <Menu></Menu>
        </main>
      </div>
    );
  }
}

export default App;
