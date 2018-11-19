import React from 'react';
import { Media } from 'react-bootstrap';
import { ReactComponent as ReactIcon } from '../Assets/Icons/react.svg';
import { ReactComponent as JavaScript } from '../Assets/Icons/javascript.svg';
import { ReactComponent as Html5 } from '../Assets/Icons/html5.svg';
import { ReactComponent as Css3 } from '../Assets/Icons/css3.svg';
import { ReactComponent as Jquery } from '../Assets/Icons/jquery.svg';
import Photo from '../Assets/Images/ming.jpg';

const aboutMe = (props) => {
  return (
    <div id="about-me" className="about-me ml-auto mr-auto" data-aos="fade-down" data-aos-offset={window.innerWidth > 1000 ? "400" : (window.innerWidth > 600 ? "300" : (window.innerWidth < 400 ? "50" : "200"))} data-aos-duration="1000">
      <img src={Photo} alt="Ming Ho" className="profile-photo d-flex" data-aos="fade-up" data-aos-offset={window.innerWidth > 1000 ? "500" : (window.innerWidth > 600 ? "300" : "100")} data-aos-duration="1000"/>
      <Media>
        <Media.Body className="about-me-body">
          <h3>About Me</h3>
          <p>Hi! I'm a web developer from Seattle. I began my programming journey in Jan 2018 and it has been quite a ride!
          I love learning about new things. You can also ask me anything travel related as I enjoy travelling and new experiences.
          Take a look at my projects below!</p>
        <div className="tech-icons d-flex justify-content-center">
            <ReactIcon alt="React Icon" className="react-icon"/>
            <JavaScript alt="JavaScript Icon" className="js-icon"/>
            <Html5 alt="HTML5 Icon" className="html-icon"/>
            <Css3 alt="CSS3 Icon" className="css-icon"/>
            <Jquery alt="jQuery Icon" className="jquery-icon"/>
          </div>
        </Media.Body>
      </Media>
    </div>
  )
};

export default aboutMe;
