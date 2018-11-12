import React, { Component } from 'react';
import './Styles/styles.css'
import Navbar from './Components/navbar';
import Footer from './Components/footer';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <div>
          <img alt="background-image" src=""></img>
        </div>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
