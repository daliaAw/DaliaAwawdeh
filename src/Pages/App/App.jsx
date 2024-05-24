import React from 'react';
import './App.css';
import Navbar from '../../Components/Navbar/Navbar';
import Home from '../Home/Home';
import About from '../About/About';
import Services from '../Services/Services';
import Skills from '../Skills/Skills';
import Resume from '../Resume/Resume';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className=''>
        <Home />
        <About />
        <Services />
        <Skills />
        <Resume />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
