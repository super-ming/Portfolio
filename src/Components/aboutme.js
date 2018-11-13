import React from 'react';
import { Media } from 'react-bootstrap';
import Photo from '../Assets/Images/ming.jpg'

const aboutMe = (props) => {
  return (
    <div id="about-me" className="about-me">
      <Media>
        <img src={Photo} alt="Ming Ho"/>
        <Media.Body className="about-me">
          <h3>About Me</h3>
          <p>
          Hi! I'm a web developer from Seattle. I began my programming journey in Jan 2018 and it has been quite a ride!
          I love learning about new things. Take a look at my projects below!
          </p>
        </Media.Body>
      </Media>
    </div>
  )
};

export default aboutMe;
