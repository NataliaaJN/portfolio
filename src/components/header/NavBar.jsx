import { Link } from "react-router-dom";
import "../../styles/components/header/NavBar.scss";
const NavBar = () => {
  return (
    <nav>
      <ul className="navBar">
        <li className="navBar__item homeNavItem"><Link className="navBar__item--navLink homeLink" to="/">Inicio</Link></li>
        <li className="navBar__item projectsNavItem"><a className="navBar__item--navLink projectsLink" href="#projects">Proyectos</a></li>
        <li className="navBar__item aboutMeNavItem"><a className="navBar__item--navLink aboutMeLink" href="#aboutMe">Sobre mí</a></li>
        <li className="navBar__item cvNavItem"><a className="navBar__item--navLink cvLink" href="#cv">Currículum</a></li>
        <li className="navBar__item contactNavItem"><Link className="navBar__item--navLink contactLink" to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
