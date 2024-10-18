import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar_me.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Laissez <span className="purple"> moi me </span> présenter
            </h1>
            <p className="home-about-body">
            Je me suis intéressée à l'intelligence artificielle, ce qui m'a amenée au développement informatique. <br/>J'aime résoudre des problèmes de logique et apprendre continuellement de nouvelles choses. 
              <br />
              <br />Je maîtrise des langages classiques comme
              <i>
                <b className="purple"> Python, Java et C#. </b>
              </i>
              <br />
              <br />
              Je m'intéresse à des projets qui permettent d'appliquer ces compétences tout en continuant à apprendre et à m'améliorer. 
              <br />
              <br />
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Restons en contact !</h1>
            <p>
            Rendez-vous  <span className="purple">sur mes réseaux </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/SoundouceCHI"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soundouce-chibani/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
