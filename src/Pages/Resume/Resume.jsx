import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section className="section-container" id="experience">
      <h5 className='title'>RESUME</h5>
      <h6 className='subtitle'>More of my credentials.</h6>
      <div className="experience-container">
        <div className="timeline" data-aos="fade-right">
          <h2 className='list-title'><i className="fas fa-briefcase"></i> Work Experience</h2>
          <div className="timeline-item">
            <div className="experience-line"></div>
            <div className="circle">
              <i className="fas fa-briefcase"></i>
            </div>
            <div className="experience-card">
              <h3 className="job-title">IT Assistant</h3>
              <p className="company">Norwegian Refugee Council</p>
              <p className="duration"> 2019 - 2022</p>
              <ul className="responsibilities">
                <li>- Assisting in the set-up, configuration, and deployment of desktops, laptops, printers, and other IT equipment.</li>
                <li>- Troubleshooting network connectivity issues and assisting in resolving issues related to LAN, WLAN, and VPN connections.</li>
                <li>- Assisting in the administration of user accounts, permissions, and access rights in various systems and applications.</li>
                <li>- Keeping abreast of emerging technologies and trends in software engineering to continuously
                      enhance skills and contribute to the organization's technological advancement</li>
              </ul>
            </div>
          </div>
          <div className="timeline-item">
            <div className="experience-line"></div>
            <div className="circle">
              <i className="fas fa-briefcase"></i>
            </div>
            <div className="experience-card">
              <h3 className="job-title">Social worker/ Field Coordinator</h3>
              <p className="company">World Food Program</p>
              <p className="duration">2017 -  2019</p>
              <ul className="responsibilities">
                <li>- Communicate clear instructions to team members.</li>
                <li>- Manage the flow of day-to-day operations.</li>
                <li>- Identify cases eligible for services and refer beneficiaries to other service providers.</li>
                <li>- Identify protection concerns in the field and refer them to UNHCR protection focal point.</li>
                <li>- Create reports to update the management on the team’s progress.</li>
                <li>- Outreach beneficiaries and collect household data for surveys for baseline information.</li>
                <li>- Insert and update beneficiaries' information.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="timeline" data-aos="fade-right">
          <h2 className='list-title'><i class="fas fa-graduation-cap"></i> Education</h2>
          <div className="timeline-item">
            <div className="experience-line"></div>
            <div className="circle">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <div className="experience-card">
              <h3 className="job-title">Software Engineering Immersive</h3>
              <p className="company">General Assembly</p>
              <p className="duration"> 2024 </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="experience-line"></div>
            <div className="circle">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <div className="experience-card">
              <h3 className="job-title">Bachelor’s degree (B.S.) in Computer Information System</h3>
              <p className="company">Jordan University of Science and Technology</p>
              <p className="duration">2011 -  2016</p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
