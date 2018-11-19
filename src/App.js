import React, { Component } from 'react';
import './Styles/styles.css'
import Navbar from './Components/navbar';
import Menu from './Components/project_menu';
import AboutMe from './Components/aboutme';
import Footer from './Components/footer';
import SplitText from 'react-pose-text';
import 'aos/dist/aos.css';
import { ReactComponent as ArrowDown } from './Assets/Icons/arrowdown.svg';

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
          <Navbar />
        </nav>
        <section className="d-flex justify-content-center align-items-center intro" >
          <h2 className="mb-0">
            <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
              Ming Ho, Front End Web Developer
            </SplitText>
          </h2>
          <span className="underline"/>
        </section>
        <main className="main-section ml-auto mr-auto">
          <a className="arrow-wrapper" href="#about-me">
            <ArrowDown alt="down arrow for skipping to about me section" className="arrow-down"/>
          </a>
          <AboutMe />
          <hr className="line"></hr>
          <Menu></Menu>
        </main>
        <footer className="footer">
          <Footer></Footer>
        </footer>
      </div>
    );
  }
}

export default App;
