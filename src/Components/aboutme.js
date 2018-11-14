import React from 'react';
import { Media } from 'react-bootstrap';
import { ReactComponent as Github } from '../Assets/Icons/github.svg'
import { ReactComponent as LinkedIn } from '../Assets/Icons/linkedin.svg'
import { ReactComponent as Envelope } from '../Assets/Icons/envelope.svg'

const aboutMe = (props) => {
  return (
    <div id="about-me" className="about-me">
      <Media>
        <Media.Body className="about-me-body">
          <h3>About Me</h3>
          <p>Hi! I'm a web developer from Seattle. I began my programming journey in Jan 2018 and it has been quite a ride!
          I love learning about new things. You can also ask me anything travel related as I enjoy travelling and new experiences.
          Take a look at my projects below!</p>
          <div className="social-icons">
            <a href="https://github.com/super-ming"><Github alt="Github" /></a>
            <a href="https://www.linkedin.com/in/mingyho"><LinkedIn alt="LinkedIn" /></a>
            <a href="mailto:mingyho@gmail.com"><Envelope alt="Email" /></a>
          </div>
        </Media.Body>
      </Media>
    </div>
  )
};

export default aboutMe;
