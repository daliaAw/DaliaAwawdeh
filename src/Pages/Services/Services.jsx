import React, { useEffect } from 'react';
import AOS from 'aos';
import './Services.css';
import 'aos/dist/aos.css';

function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="services" className="section-container">
      <h5 className='title'>SERVICES</h5>
      <h6 className='subtitle'>What I do</h6>
      <div className="services-content">
        <div className="service-card" data-aos="fade-right">
          <div className="service-box">
            <i className="far fa-file"></i>
            <div className="text">Research</div>
            <p>Understand the client's subject matter completely and build on the knowledge related to it, becoming intimately familiar with the subject matter. Determine methods to address the specific customer’s needs and requirements.</p>
          </div>
        </div>
        <div className="service-card" data-aos="fade-up">
          <div className="service-box">
            <i className="fas fa-paint-brush"></i>
            <div className="text">Web Design</div>
            <p>I create visually appealing and user-friendly websites tailored to your needs. My designs combine aesthetics with functionality, ensuring a seamless user experience across all devices. Whether starting from scratch or redesigning, I bring your vision to life with creativity and technical expertise.</p>
          </div>
        </div>
        <div className="service-card" data-aos="fade-left">
          <div className="service-box">
            <i className="fas fa-code"></i>
            <div className="text">Web Development</div>
            <p>I build robust and scalable web applications, handling both front-end and back-end development. My work ensures seamless functionality, performance, and security, creating efficient solutions tailored to your business needs. From concept to deployment, I deliver high-quality, user-focused web solutions.</p>
          </div>
        </div>
      </div>
      <div className="services-content">

        <div className="service-card" data-aos="fade-up">
          <div className="service-box">
            <i class="fas fa-vector-square"></i>
            <div className="text">UI/UX Design</div>
            <p>Crafting intuitive and engaging user interfaces is my forte. I prioritize usability, accessibility, and aesthetic appeal to ensure your application resonates with users. By aligning designs with both user needs and business objectives, I create solutions that elevate satisfaction and drive engagement.</p>
          </div>
        </div>
        <div className="service-card" data-aos="fade-left">
          <div className="service-box">
            <i class="fas fa-mobile-alt"></i>
            <div className="text">Responsive Mobile</div>
            <p>Specializing in crafting responsive mobile applications, I ensure seamless adaptability across diverse devices and screen sizes. Prioritizing responsiveness and performance, my solutions guarantee a consistent and user-friendly experience across all platforms, from smartphones to tablets.</p>
          </div>
        </div>
      </div>
    </section>
  );
}



export default Services;
