import React from "react";
import { useState } from "react";
import "../../../styles/components/main/projects/Project.scss";

const Project = ({
  projectImg,
  projectAlt,
  projectName,
  projectDescription,
  projectDetail,
  technologies,
}) => {
  // const [isShown, setIsShown] = useState(false);
  // const [technologieIcon, setTechnologieIcon] = useState([]);

  const getTechnologiesUsed = () => {
    const technologiesUsed = React.Children.toArray(
      technologies.map((eachTech) => {
        let technologieIcons = [];
        if (eachTech === "html") {
          return [...technologieIcons, <i className="fa-brands fa-html5"></i>];
        }
        if (eachTech === "css") {
          return [
            ...technologieIcons,
            <i className="fa-brands fa-css3-alt"></i>,
          ];
        }
        if (eachTech === "sass") {
          return [...technologieIcons, <i className="fa-brands fa-sass"></i>];
        }
        if (eachTech === "gulp") {
          return [...technologieIcons, <i className="fa-brands fa-gulp"></i>];
        }
        if (eachTech === "js") {
          return [
            ...technologieIcons,
            <i className="fa-brands fa-js-square"></i>,
          ];
        }
        if (eachTech === "react") {
          return [...technologieIcons, <i className="fa-brands fa-react"></i>];
        }
        if (eachTech === "node") {
          return [
            ...technologieIcons,
            <i className="fa-brands fa-node-js"></i>,
          ];
        }
        return technologieIcons;
      })
    );
    return technologiesUsed;
  };
  
  const renderProjectInfo = () => {
    // eslint-disable-next-line no-restricted-globals
    if (screen.width >= 1024)
      return (
        <>
          <p className="photoElement__hoverAuthorContainer--author">
            {projectDescription}
          </p>

          <div>{getTechnologiesUsed()}</div>
        </>
      );
  };

  return (
    <li className="projectElement">
      <div className="projectElement__projectContainer">
        <img
          className="projectElement__projectContainer--photo"
          src={projectImg}
          alt={projectAlt}
        />
        <h3 className="projectElement__projectContainer--projectName">{projectName}</h3>
        {/* <div className="projectElement__projectContainer--technologiesContainer">{getTechnologiesUsed()}</div> */}
      </div>
    </li>
  );
};

export default Project;
