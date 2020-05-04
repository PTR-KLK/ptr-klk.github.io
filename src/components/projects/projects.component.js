import React from "react";
import {
  ProjectsContainer,
  ProjectsHeader,
  ProjectsSubheader,
} from "../projects/projects.style";
import { projects } from "../../resources/projects";
import Project from "../project/project.component";

function Projects() {
  return (
    <ProjectsContainer>
      <ProjectsHeader>Portfolio</ProjectsHeader>
      <ProjectsSubheader>JS/React</ProjectsSubheader>
      <hr style={{ color: "#333" }}></hr>
      {projects.map((e) => {
        return (
          <Project
            title={e.title}
            demo={e.demo}
            repo={e.repo}
            image={e.image}
            imageAlt={e.imageAlt}
            description={e.description}
          />
        );
      })}
    </ProjectsContainer>
  );
}

export default Projects;
