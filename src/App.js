import React, { Component } from 'react';
import './Styles/styles.css'
import Navbar from './Components/navbar';
import Menu from './Components/project_menu';
import AboutMe from './Components/aboutme';
import Footer from './Components/footer';
import Photo from './Assets/Images/ming.jpg';
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
    this.arrowDown.addEventListener('click', ()=> {
      window.scroll({
        top: 750,
        left: 0,
        behavior: 'smooth'
      });
    });
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
            <ArrowDown className="arrow-down"/>
          </div>
          <img src={Photo} alt="Ming Ho" className="profile-photo mr-auto " data-aos="fade-up" data-aos-offset={window.innerWidth > 1000 ? "400" : (window.innerWidth > 600 ? "300" : "0")} data-aos-duration="1000"/>
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
