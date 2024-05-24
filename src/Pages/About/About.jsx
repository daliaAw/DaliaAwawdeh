import React from 'react';
import cv from './DaliaAwawdeh.pdf'
import './About.css';

function About() {
  return (
    <section className="section-container row " id="about" name="about">
        <h5 className='title'>ABOUT ME</h5>
        <h6 className='subtitle'>Who I am</h6>
        <div className="about-content">
          <div className="content" data-aos="fade-right">
            <p>
            Greetings! I'm Dalia Awawdeh, a dynamic full-stack developer dedicated to creating seamless digital experiences. With expertise spanning both front-end and back-end technologies, 
            I'm passionate about bringing ideas to life through clean, efficient code.
            </p>
            <a className="cv-btn" href={cv} download target="_target">Download CV</a>
          </div>
        </div>
      <hr className='divider'/>
    </section>
  );
}

export default About;
