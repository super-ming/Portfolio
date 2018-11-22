import React, { Component } from 'react';
import { Row, Col, Overlay } from 'react-bootstrap';
import { ReactComponent as ReactIcon } from '../Assets/Icons/react.svg';
import { ReactComponent as JavaScript } from '../Assets/Icons/javascript.svg';
import { ReactComponent as Html5 } from '../Assets/Icons/html5.svg';
import { ReactComponent as Css3 } from '../Assets/Icons/css3.svg';
import { ReactComponent as Jquery } from '../Assets/Icons/jquery.svg';
import { ReactComponent as Bootstrap } from '../Assets/Icons/bootstrap.svg';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.attachRef = target => {
      console.log(target);
      this.setState({ target });
    }
  }

  renderModal = (e) => {
    const { show } = this.state;
    console.log(e.target.parentElement.children[0].id);
    this.setState({
      show: !show,
      activeSkill: e.target.parentElement.children[0].id
    })

  }
  render() {
    const { show, target } = this.state;
    return(
      <section className="skills d-flex justify-content-center ml-auto mr-auto" data-aos="zoom-in" data-aos-duration="1500">
        <h3>Skills</h3>
        <div className="skills-items d-flex justify-content-center">
          <Row className="d-flex justify-content-around">
            <Col xs={4}>
              <div className="tech-icons" onMouseOver={this.renderModal}>
                <ReactIcon alt="React" className="react" id="React"/>
                <div className="overlay d-flex align-items-center justify-content-center">
                  <div>{this.state.activeSkill}</div>
                </div>
              </div>
            </Col>
            <Col xs={4}>
              <div className="tech-icons" onMouseOver={this.renderModal}>
                <JavaScript alt="JavaScript" className="javascript" id="JavaScript"/>
                <div className="overlay d-flex align-items-center justify-content-center">
                  <div>{this.state.activeSkill}</div>
                </div>
              </div>
            </Col>
            <Col xs={4}>
              <div className="tech-icons" onMouseOver={this.renderModal}>
                <Html5 alt="HTML5" className="html" id="HTML"/>
                <div className="overlay d-flex align-items-center justify-content-center">
                  <div>{this.state.activeSkill}</div>
                </div>
              </div>
            </Col>
            <Col xs={4}>
              <div className="tech-icons" onMouseOver={this.renderModal}>
                <Css3 alt="CSS3" className="css" id="CSS3"/>
                <div className="overlay d-flex align-items-center justify-content-center">
                  <div>{this.state.activeSkill}</div>
                </div>
            </div>
            </Col>
            <Col xs={4}>
              <div className="tech-icons" onMouseOver={this.renderModal}>
                <Jquery alt="jQuery" className="jquery" id="jQuery"/>
                <div className="overlay d-flex align-items-center justify-content-center">
                  <div>{this.state.activeSkill}</div>
                </div>
              </div>
            </Col>
            <Col xs={4}>
              <div className="tech-icons" onMouseOver={this.renderModal}>
                <Bootstrap alt="Bootstrap" className="bootstrap" id="Bootstrap"/>
                <div className="overlay d-flex align-items-center justify-content-center">
                  <div>{this.state.activeSkill}</div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    )
  }
}



export default Skills;
