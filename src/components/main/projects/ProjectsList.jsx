import Project from "./Project";
import benderImg from "../../../images/bender-web.png";
import harryPotterImg from "../../../images/harry-potter-web.png";
import animenetImg from "../../../images/animenet-web.png";
import hangmanImg from "../../../images/hangman-game-web.png";
import awesomeCardsImg from "../../../images/awesome-cards-web.png";
import rockPaperScissorsImg from "../../../images/rock-paper-scissors-web.png";

const ProjectsList = () => {
  return (
    <section className="projectsSection">
      <ul className="projectsSection__projectsList">
        <Project
          projectImg={benderImg}
          projectAlt="Web de Bender"
          projectName="Bender"
          projectDescription="Bender- pure CSS"
          projectDetail="Personaje Bender, de Futurama, hecho únicamente con HTML y CSS"
          technologies={["html", "css", "sass"]}
          linkWeb= ""
          linkGithub= ""
        />

        <Project
          projectImg={harryPotterImg}
          projectAlt="Web de Harry Potter"
          projectName="Harry Potter search engine"
          projectDescription="Buscador de personajes de Harry Potter"
          projectDetail="Web de Harry Potter en la que puedes buscar tus personajes favoritos por su nombre, filtrarlos por casa, por género o estado. También puedes ordenarlos alfabéticamente"
          technologies={["html", "css", "sass", "react"]}
          linkWeb= ""
          linkGithub= ""
        />
        <Project
          projectImg={hangmanImg}
          projectAlt="Juego del ahorcado"
          projectName="Hangman game"
          projectDescription="Juego del ahorcado"
          projectDetail="lorem ipsum..."
          technologies={["html", "css", "sass", "react"]}
          linkWeb= ""
          linkGithub= ""
        />
        <Project
          projectImg={awesomeCardsImg}
          projectAlt=""
          projectName="Awesome Cards"
          projectDescription="Proyecto grupal: generador de tarjetas de visita"
          projectDetail="Web para generar tarjetas de visita online. Introduce tus datos en cada uno de los campos, a medida que los vayas rellenando podrás previsualizar tu futura tarjeta. Cuando hayas terminado, haz click en el botón crear, para generar la tarjeta y, si te ha gustado, ¡puedes compartirlo en twitter!"
          technologies={["html", "css", "sass", "react", "node"]}
          linkWeb= ""
          linkGithub= ""
        />

        <Project
          projectImg={animenetImg}
          projectAlt="Buscador de series de anime"
          projectName="AnimeNet"
          projectDescription="Evaluación Final módulo 1 Adalab"
          projectDetail="lorem ipsum..."
          technologies={["html", "css", "sass", "js"]}
          linkWeb= ""
          linkGithub= ""
        />

        <Project
          projectImg={rockPaperScissorsImg}
          projectAlt=""
          projectName="Anonymous Proxy"
          projectDescription="Evaluación Final módulo 1 Adalab"
          projectDetail="lorem ipsum..."
          technologies={["html", "css", "sass"]}
          linkWeb= ""
          linkGithub= ""
        />
      </ul>
    </section>
  );
};

export default ProjectsList;
