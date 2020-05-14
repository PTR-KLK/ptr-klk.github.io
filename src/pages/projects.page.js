import React from "react";
import { projects } from "../resources/projects.resource";
import { Header, Subheader } from "../App.style";
import Card from "../components/card/card.component";
import Project from "../components/project/project.component";

function Projects() {
  return (
    <>
      <Header>{projects.header}</Header>
      <Subheader>{projects.subheader}</Subheader>
      {projects.arr.map((e, idx) => {
        return (
          <Card
            key={`p${idx}`}
            invertOrder={idx % 2 === 0 ? 0 : 1}
            title={e.title}
          >
            <Project
              invertOrder={idx % 2 === 0 ? 0 : 1}
              demo={e.demo}
              repo={e.repo}
              image={e.image}
              imageAlt={e.imageAlt}
              description={e.description}
            />
          </Card>
        );
      })}
    </>
  );
}

export default Projects;
