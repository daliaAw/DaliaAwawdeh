import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

function HomeSection() {
  const [index, setIndex] = useState(0);
  const words = ["FULL STACK DEVELOPER", "UI DESIGNER"];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1300);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home" id="home" name="home">
        <div className="home-content">
          <h3 className='text-1'>Hello World,</h3>
          <h1 className="text-2">I'm Dalia Awawdeh.</h1>
          <div className="text-3">
            <span className="txt-type" data-wait="3000" data-words={words}>
              <span className="txt">{words[index]}</span>
            </span>
          </div>
        </div>
     
      <div className='social-links'>
        <a href="https://www.linkedin.com/in/awawdehdalia/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/daliaAw?tab=repositories" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="mailto:awawdeh.dalia@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </section>
  );
}

export default HomeSection;
