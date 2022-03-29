import Project from "./Project";

const ProjectsList = () => {
  return (
    <section className="projectsSection">
      <ul className="projectsSection__projectsList">
        <Project
          projectImg=""
          projectName="Anonymous Proxy"
          projectDescription="Evaluación Final módulo 1 Adalab"
          technologies={["html", "sass"]}
        />
        
      </ul>
    </section>
  );
};

export default ProjectsList;
