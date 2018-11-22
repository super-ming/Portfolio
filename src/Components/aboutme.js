import React from 'react';
import { Media } from 'react-bootstrap';
import Photo from '../Assets/Images/ming.jpg';

const aboutMe = (props) => {
  return (
    <div id="about-me" className="about-me ml-auto mr-auto" data-aos="fade-down" data-aos-offset={window.innerWidth > 1000 ? "400" : (window.innerWidth > 600 ? "300" : (window.innerWidth < 400 ? "50" : "200"))} data-aos-duration="1000">
      <img src={Photo} alt="Ming Ho" className="profile-photo d-flex" data-aos="fade-up" data-aos-offset={window.innerWidth > 1000 ? "500" : (window.innerWidth > 600 ? "300" : "100")} data-aos-duration="1000"/>
      <Media>
        <Media.Body className="about-me-body">
          <h3>About Me</h3>
          <p>Hi! As a web developer, I strive to create solutions for problems that matter to others. I enjoy making things that people find useful.
             I love learning about new things. You can also ask me anything travel related as I enjoy travelling and new experiences.
             Check out my projects below!
          </p>
        </Media.Body>
      </Media>
    </div>
  )
};

export default aboutMe;
