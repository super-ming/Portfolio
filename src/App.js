import React, { Component } from 'react';
import './Styles/styles.css'
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import Menu from './Components/project_menu';
import AboutMe from './Components/aboutme';


class App extends Component {

  render() {
    return (
      <div className="App">
        <nav className="App-header">
          <Navbar className="navbar" />
        </nav>
        <section className="d-flex justify-content-center align-items-center intro">
          <div>
            <h2 className="mb-0">Ming Ho, Front End Web Developer</h2>
          </div>
          <span />
        </section>
        <main className="main-section">
          <AboutMe />
          <hr className="line"></hr>
          <Menu></Menu>
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
