import React from "react";
import { projects } from "../resources/projects";
import { Header, Subheader } from "../App.style";
import Card from "../components/card/card.component";

function Projects() {
  return (
    <>
      <Header>Moje portfolio</Header>
      <Subheader>JS/React</Subheader>
      {projects.map((e, idx) => {
        return (
          <Card
            key={e.title}
            invertOrder={idx % 2 === 0 ? 0 : 1}
            title={e.title}
            demo={e.demo}
            repo={e.repo}
            image={e.image}
            imageAlt={e.imageAlt}
            description={e.description}
          />
        );
      })}
    </>
  );
}

export default Projects;
