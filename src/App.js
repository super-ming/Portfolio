import React, { Component } from 'react';
import './Styles/styles.css'
import Navbar from './Components/navbar';


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
      </div>
    );
  }
}

export default App;
