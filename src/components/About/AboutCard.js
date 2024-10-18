import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour, je suis <span className="purple">Soundouce CHIBANI</span>
            <br />
            Actuellement à la recheche d'une alternance en tant que développeuse Python - Django.
            <br />
            <br />
            À part le codage, il y a d'autres activités que j'aime faire !
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> La boxe
            </li>
            <li className="about-activity">
              <ImPointRight /> Le sport en salle
            </li>
            <li className="about-activity">
              <ImPointRight /> La cuisine
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
