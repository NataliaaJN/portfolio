import { useState } from "react";
const Project = ({
  projectImg,
  projectName,
  projectDescription,
  technologies,
}) => {
  const [isShown, setIsShown] = useState(false);
  const [technologieIcon, setTechnologieIcon] = useState([]);

  const getTechnologiesUsed = () => {
    technologies.forEach((eachTech) => {
      let technologiesUsed = [];
      if (eachTech === "html") {
        // return "fa-brands fa-html5"

        // return technologiesUsed= "fa-brands fa-html5"
        // return setTech(tecnologiesused)

        // <i className="fa-brands fa-html5"></i>;
        return [...technologiesUsed, "fa-brands fa-html5"];
      }
      if (eachTech === "css") {
        // <i className="fa-brands fa-css3-alt"></i>
        return [...technologiesUsed, "fa-brands fa-css3-alt"];
      }
      if (eachTech === "sass") {
        // <i className="fa-brands fa-sass"></i>
        return [...technologiesUsed, "fa-brands fa-sass"];
      }
      if (eachTech === "gulp") {
        return [...technologiesUsed, "fa-brands fa-gulp"];
      }
      if (eachTech === "js") {
        return [...technologiesUsed, "fa-brands fa-js-square"];
      }
      if (eachTech === "react") {
        return [...technologiesUsed, "fa-brands fa-react"];
      }
      if (eachTech === "node") {
        return [...technologiesUsed, "fa-brands fa-node-js"];
      }
      return technologiesUsed;
    });
  };
  getTechnologiesUsed();
  console.log(getTechnologiesUsed());
  // console.log(getTechnologiesUsed());
  const renderProjectDescription = () => {
    // eslint-disable-next-line no-restricted-globals
    if (screen.width >= 1024)
      return (
        <>
          <p className="photoElement__hoverAuthorContainer--author">
            {projectDescription}
          </p>
          <p>{getTechnologiesUsed()}</p>
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
