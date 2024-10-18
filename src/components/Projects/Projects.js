import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import webScrap from "../../Assets/Projects/webScrap_resized.png";
import shortest from "../../Assets/Projects/shortest_resized.png";
import receipe from "../../Assets/Projects/RecipeHarvester1_resized.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Projets </strong>
        </h1>
        <p style={{ color: "white" }}>
          Quelques projets récent.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={receipe}
              isBlog={false}
              title="RecipeHarvesterWeb"
              description="Un projet d'application web qui utilise Selenium pour effectuer du web scraping et récupérer des recettes en ligne basées sur des mots-clés. L'application permet aux utilisateurs de rechercher, visualiser et sauvegarder des recettes dans une interface conviviale, avec la possibilité de générer des listes de courses en fonction des ingrédients. Ce projet met en œuvre des compétences en développement web full-stack et en gestion de données."
              ghLink="https://github.com/SoundouceCHI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webScrap}
              isBlog={false}
              title="RecipeHarvester"
              description="Ce projet vise à développer une base de données complète de recettes de cuisine en extrayant des informations de plusieurs sites web culinaires. Utilisant Python et Selenium pour interagir avec les éléments JavaScript des sites, j'ai créé des scripts automatisés qui naviguent et collectent des données telles que les titres de recettes, les ingrédients, les temps de préparation, et les images. Les données extraites sont structurées en objets personnalisés, rendant leur manipulation et leur stockage plus efficaces"
              ghLink="https://github.com/SoundouceCHI/RecipeHarvester"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shortest}
              isBlog={false}
              title="Shortest_path_finder"
              description="Ce projet illustre la mise en œuvre de l'algorithme de recherche en largeur (BFS) pour trouver le chemin le plus court à travers un labyrinthe. Le labyrinthe est modélisé sous forme de grille 2D, avec des murs, un point de départ et un point d'arrivée. L'objectif est de naviguer du point de départ au point d'arrivée en évitant les obstacles."
              ghLink="https://github.com/SoundouceCHI/shortest_path_finder"            
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
