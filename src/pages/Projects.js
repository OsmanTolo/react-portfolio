// import data from "../data/projects.json";

export default function Projects() {
  // const projectData = data;

  return (
    <div className="projects">
      <h1>Featured Projects</h1>
      <div className="projects-container">
        <div className="project-card">
          <div className="project-card__img">
            {/* <img
              src={require("../images/readme-generator.jpg")}
              alt="Custom README generator project screenshot"
            /> */}
          </div>
          <div className="project-card__content">
            <h2>
              {/* <a
                href="https://github.com/OsmanTolo/readme_generator-node-js"
                className="project-card__link"
              >
                Custom README Generator
              </a> */}
            </h2>
            <p>
              A single web page application that generates a professional
              repository README based on user inputs.
            </p>
          </div>
        </div>
        <div className="project-card">
          <div className="project-card__img">
            {/* <img
              src={require("../images/readme-generator.jpg")}
              alt="Custom README generator project screenshot"
            /> */}
          </div>
          <div className="project-card__content">
            <h2>
              {/* <a
                href="https://github.com/OsmanTolo/readme_generator-node-js"
                className="project-card__link"
              >
                Custom README Generator
              </a> */}
            </h2>
            <p>
              A single web page application that generates a professional
              repository README based on user inputs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
