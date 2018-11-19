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
  componentDidMount() {
    this.arrowDown.addEventListener('keypress', (e)=>{ if(e.keycode === 13){ this.adjustArrowDown(e) } }, false);
    this.arrowDown.addEventListener('click', this.adjustArrowDown, false);
  }

  adjustArrowDown = (e) => {
    if (window.innerWidth < 929) {
      window.scroll({
        top: 420,
        left: 0,
        behavior: 'smooth'
      });
    } else {
      window.scroll({
        top: 750,
        left: 0,
        behavior: 'smooth'
      });
    }
  }

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
        <main className="main-section">
          <div className="arrow-wrapper" ref={(ref)=> this.arrowDown = ref}>
            <ArrowDown alt="down arrow for skipping to about me section" className="arrow-down" role="button"/>
          </div>
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
