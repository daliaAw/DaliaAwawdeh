import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {
  const [showArrow, setShowArrow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the form data
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value
    };

    // Send the message using EmailJS
    emailjs.send(
      'service_5g8njw3',
      'template_n7fpo0o',
      formData,
      'mx3LQOF7D1_RkSRzCzroL' // Replace with your EmailJS user ID
    )
      .then((response) => {
        console.log('Message sent successfully!', response.status, response.text);
        alert('Your message has been sent successfully!');
      })
      .catch((error) => {
        console.error('Failed to send message. Error:', error);
        alert('Failed to send message. Please try again later.');
      });

    // Clear the form fields after submission
    e.target.reset();
  };

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <section id="contact" className='section-container'>
      {/* <hr className='divider m-3'/> */}
      <h5 className='title contact-title'>CONTACt ME</h5>
      <h6 className='subtitle' style={{ color: 'white' }}>Get in touch</h6>
      <div className="contact-content row container mx-auto">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" required></textarea>
          <button type="submit" className='contact-btn'>Send Message</button>
        </form>
      </div>

      <div className="container">
        <ul className="contact-info">
          <li className='contact-list'>
            <i className="fas fa-map-marker-alt"></i>
            {/* <p>WHERE TO FIND ME</p> */}
            <a className='list-link' href="data:text/html;charset=utf-8;base64,PHNjcmlwdD5hbGVydCgiSWwgU2FkZGxlciBhbmQgQWxsIE1hcmtldGVyIik8L3NjcmlwdD4=">
              Chicago, IL</a>
          </li>
          <li className='contact-list'>
            <i className="fas fa-envelope"></i>
            {/* <p>EMAIL ME AT</p> */}
            <a className='list-link' href="mailto:awawdeh.dalia@gmail.com">awawdeh.dalia@gmail.com</a>
          </li>
          <li className='contact-list'>
            <i className="fas fa-phone"></i>
            {/* <p>CALL ME AT</p> */}
            <a className='list-link' href="tel:+17087378271">+1(708)737-8271</a>
          </li>

        </ul>
      </div>
      {/* Arrow-up icon */}
      {showArrow && (
        <div className="arrow-up" onClick={scrollToTop}>
          <i className="fas fa-arrow-up arrow-icon"></i>
        </div>
      )}
      <div className='social-links-contact bottom'>
        <a href="https://www.linkedin.com/in/awawdehdalia/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/daliaAw?tab=repositories" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="mailto:awawdeh.dalia@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>
        <p className='signature'>DALIA AWAWDEH @ 2024</p>
      </div>
    </section>
  );
}

export default Contact;
