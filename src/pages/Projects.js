import data from "../assets/projects.json";

export default function Projects() {
  const projectData = data;

  return (
    <div className="projects">
      <h1>Featured Projects</h1>
      <div className="projects-container">
        {projectData.map((project) => {
          return (
            <div className="project-card" key={project.id}>
              <div className="project-card__img">
                <img
                  src={project.screenshotPath}
                  alt="Custom README generator project screenshot"
                />
              </div>
              <div className="project-card__content">
                <h2>
                  <a href={project.repoLink} className="project-card__link">
                    {project.title}
                  </a>
                </h2>
                <p>{project.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
