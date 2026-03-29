import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './Navbar';
import Introduction from './Home';
import Experience from './Experiences';
import Projects from './Project';
import Skills from './Skills';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div id="home">
          <Introduction />
        </div>
        <hr></hr>
        <div id="skills">
          <Skills />
        </div>
        <hr></hr>
        <div id="experiences">
          <Experience />
        </div>
        <hr></hr>
        <div id="projects">
          <Projects />
        </div>
      </Router>
    </div>
  );
}

export default App;