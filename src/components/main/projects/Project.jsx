import { useState } from "react";
const Project = ({
  projectImg,
  projectName,
  projectDescription,
  technologies,
}) => {
  const [isShown, setIsShown] = useState(false);
 

  const getTechnologiesUsed = () => {
    technologies.map((eachTech) => {
      
      let technologiesUsed;
      if (eachTech === "html") {
        // return technologiesUsed= <i className= "fa-brands fa-html5"></i>;
        return console.log(<p>hola</p>);
      } else if (eachTech === "css") {
        return technologiesUsed= <i className= "fa-brands fa-css3-alt"></i>;
      } else if (eachTech === "sass") {
        return technologiesUsed= <i className= "fa-brands fa-sass"></i>;
      } else if (eachTech === "gulp") {
        return technologiesUsed = <i className= "fa-brands fa-gulp"></i>;
      } else if (eachTech === "js") {
        return technologiesUsed= <i className= "fa-brands fa-js-square"></i>;
      } else if (eachTech === "react") {
        return technologiesUsed= <i className= "fa-brands fa-react"></i>;
      } else if (eachTech === "node") {
        return technologiesUsed= <i className= "fa-brands fa-node-js"></i>;
      }
      return technologiesUsed;
    });
  };
  console.log(getTechnologiesUsed());
  const renderProjectDescription = () => {
    // eslint-disable-next-line no-restricted-globals
    if (screen.width >= 1024)
      return (
        <>
          <p className="photoElement__hoverAuthorContainer--author">
            {projectDescription}
          </p>
          {getTechnologiesUsed()}
        </>
      );
  };

  return (
    <li className="projectElement">
      <div className="projectElement__projectContainer">
        <div className="projectElement__projectContainer--indexContainer"></div>
        <img
          className="projectElement__projectContainer--photo"
          src="pok"
          alt="s"
        />
      </div>
    </li>
  );
};

export default Project;
