import React, { useState } from 'react';
import './Projects.css';
import pro1 from './pro1.jpeg';
import pro2 from './pro2-1.JPG';
import pro3 from './pro3.png';
import pro4 from './pro4-1.JPG';
import pro5 from './pro3-1.JPG'

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel">
      <button className="carousel-button left" onClick={handlePrevClick}>&lt;</button>
      <img src={images[currentIndex]} alt={`Project Image ${currentIndex + 1}`} className="carousel-image" />
      <button className="carousel-button right" onClick={handleNextClick}>&gt;</button>
    </div>
  );
}

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1, img: pro1, link: 'https://daliaaw.github.io/Memory-Game/', title: 'Memory Game', tech: 'JavaScript', techUsed: 'Technologies used: HTML, CSS, JavaScript.',
      description: 'Developed a memory game utilizing HTML, CSS, and JavaScript to enhance user engagement and cognitive skills.Implemented features such as card flipping, matching logic, and scoring system, showcasing proficiency in frontend development and problem-solving.'
    },
    { id: 2, img: pro2, link: 'https://daliaaw.github.io/TradeFlow/', title: 'TradeFlow', tech: 'React', techUsed: 'Technologies used: React.js, Express.js, Node.js, CSS, Bootstrap, and MongoDB',
    description: 'TradeFlow is a comprehensive solution for businesses to efficiently manage surplus inventory through a seamless online marketplace. Built with React.js, Express.js, Node.js, CSS, Bootstrap, and MongoDB, this platform mpowers sellers to list their products with ease while enabling buyers to access transparent pricing and detailed descriptions. With features like ratings, reviews, and Favorites, TradeFlow prioritizes user experience, facilitating informed purchasing decisions and simplifying inventory management for businesses.' 
    },
    { id: 3, img: pro5, link: 'https://food-compass-0ba825523484.herokuapp.com/', title: 'Food Compass', tech: 'JavaScript', techUsed: 'Technologies used: JavaScript, Node.js, EJS, Express, Mongoose, MongoDB, RESTful Routing, JSON api, Bootstrap',
    description: 'Food Compass is a captivating web application that invites users on a global culinary adventure. Utilizing EJS, CSS, JavaScript, and MongoDB, this immersive platform offers an engaging exploration of diverse cuisines worldwide. As the lead developer, I meticulously crafted an intuitive user experience, showcasing expertise in front-end and back-end technologies. Food Compass represents my ability to deliver innovative solutions that resonate with users, combining technical proficiency with a passion for culinary exploration' 
     },
    { id: 4, img: pro4, link: 'https://daliaaw.github.io/Freelancer/', title: 'Freelancer', tech: 'Python', techUsed:'Technologies used: Python, Django, PostgreSQL, HTML, CSS, Bootstrap',
    description: 'Freelancer is a dynamic web platform connecting clients with skilled professionals for short-term projects. Developed using Python, Django, PostgreSQL, HTML, CSS, and Bootstrap, it streamlines talent sourcing, fostering collaboration and success in the realm of freelance work' },
  ];

  const toggleProjectDescription = (projectId) => {
    setActiveProject(activeProject === projectId ? null : projectId);
  };

  return (
    <section className="section-container" id="projects">
      <h5 className='title'>PORTFOLIO</h5>
      <h6 className='subtitle'>Recent Work</h6>

      <div className="pro-container container">
        <div className="row no-gutters">
          {projects.map((project) => (
            <div className="col-lg-6 col-md-6 col-sm-12 p-0" key={project.id}>
              <div className="project-image">
                <img src={project.img} alt={project.title} className="project-img img-fluid" />
                <div className="overlay"></div>
                <div className="project-title-overlay">
                  <p>{project.title}</p>
                  <p>{project.tech}</p>
                  <button onClick={() => toggleProjectDescription(project.id)}>
                    LEARN MORE
                  </button>
                </div>
                {activeProject === project.id && (
                  <div>
                    <div className="overlay-background"></div> {/* Add the overlay background */}
                    <div className="modal-wrap flex visible">
                      <button className="close-modal" onClick={() => toggleProjectDescription(null)}>
                        <i className="fas fa-times"></i>
                      </button>
                      <div className="project-details">
                        <h2>{project.title}</h2>
                        <p className='techUsed'>{project.techUsed}</p>
                        <p className='description'>{project.description}</p>
                        <button className="view-site-button" onClick={() => window.open(project.link, "_blank")}>
                          VIEW SITE
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
