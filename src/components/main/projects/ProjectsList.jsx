import "../../../styles/components/main/projects/ProjectsList.scss";
import Project from "./Project";
import portfolioImg from "../../../images/portfolio-web.png";
import benderImg from "../../../images/bender-web.png";
import harryPotterImg from "../../../images/harry-potter-web.png";
import animenetImg from "../../../images/animenet-web.png";
import hangmanImg from "../../../images/hangman-game-web.png";
import awesomeCardsImg from "../../../images/awesome-cards-web.png";
// import rockPaperScissorsImg from "../../../images/rock-paper-scissors-web.png";

const ProjectsList = () => {
  return (
    <section className="projectsSection">
      <ul className="projectsSection__projectsList">

      <Project
          projectImg={portfolioImg}
          projectAlt="Portfolio"
          projectName="Portfolio"
          projectDescription="Portfolio en el que puedes ver algunos de mis proyectos y conocer un poco más sobre mí"
          projectDetail="Aquí puedes ver algunos de los proyectos que he realizado y descubrir un poco sobre mí. Además, he añadido un formulario con el que podrás contactar conmigo, así que no dudes en rellenarlo para contratarme, preguntarme sobre alguno de los proyectos, alguna duda, feedback o simplemente para saludarme. Estaré encantada de responder vuestros mensajes"
          technologies={["html", "css", "sass", "react", "node"]}
          linkWeb= "https://nataliaajn.github.io/portfolio/"
          linkGithub= "https://github.com/NataliaaJN/portfolio"
        />

        <Project
          projectImg={benderImg}
          projectAlt="Web de Bender"
          projectName="Bender"
          projectDescription="Bender- pure CSS"
          projectDetail="Personaje Bender, de Futurama, hecho únicamente con HTML y CSS"
          technologies={["html", "css", "sass"]}
          linkWeb= "https://nataliaajn.github.io/bender-pure-css/"
          linkGithub= "https://github.com/NataliaaJN/bender-pure-css"
        />

        <Project
          projectImg={harryPotterImg}
          projectAlt="Web de Harry Potter"
          projectName="Harry Potter search engine"
          projectDescription="Buscador de personajes de Harry Potter"
          projectDetail="Web de Harry Potter en la que puedes buscar tus personajes favoritos por su nombre, filtrarlos por casa, por género o estado. También puedes ordenarlos alfabéticamente"
          technologies={["html", "css", "sass", "react"]}
          linkWeb= "https://nataliaajn.github.io/Harry-Potter-searcher/#/"
          linkGithub= "https://github.com/NataliaaJN/Harry-Potter-searcher"
        />
        <Project
          projectImg={hangmanImg}
          projectAlt="Juego del ahorcado"
          projectName="Hangman game"
          projectDescription="Juego del ahorcado"
          projectDetail="lorem ipsum..."
          technologies={["html", "css", "sass", "react"]}
          linkWeb= "https://nataliaajn.github.io/hangman-game/#/"
          linkGithub= "https://github.com/NataliaaJN/hangman-game"
        />
        <Project
          projectImg={awesomeCardsImg}
          projectAlt="Web para crear tarjetas de visita"
          projectName="Awesome Profile Cards"
          projectDescription="Generador de tarjetas de visita"
          projectDetail="Web para generar tarjetas de visita online. Introduce tus datos en cada uno de los campos, a medida que los vayas rellenando podrás previsualizar tu futura tarjeta. Cuando hayas terminado, haz click en el botón crear, para generar la tarjeta y, si te ha gustado, ¡puedes compartirlo en twitter!"
          technologies={["html", "css", "sass", "react", "node"]}
          linkWeb= "https://module-4-team-3.herokuapp.com/#/"
          linkGithub= "https://github.com/NataliaaJN/project-promo-o-module-4-team-3"
        />

        <Project
          projectImg={animenetImg}
          projectAlt="Buscador de series de anime"
          projectName="AnimeNet"
          projectDescription="Buscador de series de anime"
          projectDetail="Busca series de anime y guarda tus favoritas. Tranquil@, aunque recargues o cierres la página no perderás tus favs"
          technologies={["html", "css", "sass", "js"]}
          linkWeb= "https://nataliaajn.github.io/AnimeNet/"
          linkGithub= "https://github.com/NataliaaJN/AnimeNet"
        />


        {/* <Project
          projectImg={rockPaperScissorsImg}
          projectAlt="Juego piedra, papel o tijera"
          projectName="Rock, paper, scissors game"
          projectDescription="Enfréntate al ordenador"
          projectDetail="lorem ipsum..."
          technologies={["html", "css", "sass", "js"]}
          linkWeb= "https://nataliaajn.github.io/piedra-papel-o-tijera/"
          linkGithub= "https://github.com/NataliaaJN/piedra-papel-o-tijera"
        /> */}
      </ul>
    </section>
  );
};

export default ProjectsList;
