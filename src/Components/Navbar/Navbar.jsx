import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-horizontal ">
      <div className="navbar-scrol">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={() => scrollToSection('home')}>
              <i className="fas fa-home"></i> 
              <p>HOME</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about" onClick={() => scrollToSection('about')}>
              <i className="fas fa-quote-left"></i> 
              <p>ABOUT </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services" onClick={() => scrollToSection('services')}>
              <i className="fas fa-laptop-code"></i> 
              <p>SERVICES </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/skills" onClick={() => scrollToSection('skills')}>
              <i className="fas fa-cogs"></i> 
              <p>SKILLS </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/experience" onClick={() => scrollToSection('experience')}>
              <i className="fas fa-file-alt"></i> 
              <p>RESUME</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/projects" onClick={() => scrollToSection('projects')}>
              <i className="fas fa-folder-open"></i> 
              <p>PORTFOLIO</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact" onClick={() => scrollToSection('contact')}>
              <i className="fas fa-envelope"></i> 
              <p>CONTACT</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
