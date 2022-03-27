import { useState } from "react";
const Project = ({projectImg, projectName, projectDescription, technologies}) => {
    const [isShown, setIsShown] = useState(false);

  const renderProjectDescription = () => {
    // eslint-disable-next-line no-restricted-globals
    if (screen.width >= 1024) return <p className="photoElement__hoverAuthorContainer--author">{projectDescription}</p>;
  };

    return(
        <li className="projectElement">
        <div className="projectElement__projectContainer">
          <div className="projectElement__projectContainer--indexContainer">
            
          </div>
          <img
            className="projectElement__projectContainer--photo"
            src="pok"
            alt="s"
          />
        </div>
      </li>
    )
}

export default Project;