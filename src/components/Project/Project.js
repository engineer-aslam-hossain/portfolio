import React from "react";
import fakeProjectData from "../../fakeData/fakeProjectData";
import ParticleCanvas from "../ParticleCanvas/ParticleCanvas";
import SingleProject from "../SingleProject/SingleProject";
import "./Project.css";
const Project = () => {
  return (
    <section className="project" id="project">
      <ParticleCanvas />
      <div className="container">
        <div className="projectHeading d-flex flex-column align-items-center">
          <h2>My latest featured project</h2>
          <p>
            Recently I created some Full-stack project and some other React
            project.
          </p>
        </div>
        <div className="row">
          {fakeProjectData.map((project) => (
            <SingleProject key={project.id} project={project} />
          ))}
        </div>
        <div className="allProject d-flex justify-content-center mt-5">
          <a
            className="allArticle"
            href="https://www.fiverr.com/dev_aslam"
            target="blank"
          >
            All My Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
