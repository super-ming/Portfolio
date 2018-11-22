import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { ReactComponent as ReactIcon } from '../Assets/Icons/react.svg';
import { ReactComponent as JavaScript } from '../Assets/Icons/javascript.svg';
import { ReactComponent as Html5 } from '../Assets/Icons/html5.svg';
import { ReactComponent as Css3 } from '../Assets/Icons/css3.svg';
import { ReactComponent as Jquery } from '../Assets/Icons/jquery.svg';
import { ReactComponent as Bootstrap } from '../Assets/Icons/bootstrap.svg';

const Skills = (props) => {
  return(
    <section className="skills d-flex justify-content-center ml-auto mr-auto" data-aos="zoom-in" data-aos-duration="1500">
      <h3>Skills</h3>
      <div className="skills-items d-flex justify-content-center">
        <Row className="d-flex justify-content-around">
          <Col xs={4}>
            <ReactIcon alt="React" className="react-icon"/>React
          </Col>
          <Col xs={4}>
            <JavaScript alt="JavaScript Icon" className="js-icon"/>JavaScript
          </Col>
          <Col xs={4}>
            <Html5 alt="HTML5 Icon" className="html-icon"/>HTML5
          </Col>
          <Col xs={4}>
            <Css3 alt="CSS3 Icon" className="css-icon"/>CSS3
          </Col>
          <Col xs={4}>
            <Jquery alt="jQuery Icon" className="jquery-icon"/>jQuery
          </Col>
          <Col xs={4}>
            <Bootstrap alt="Bootstrap Icon" className="bootstrap-icon"/>Bootstrap
          </Col>
        </Row>
      </div>
    </section>
  )
}



export default Skills;
