import React from "react";
import {
  CardsContainer,
  CardsHeader,
  CardsSubheader,
} from "./cards.style";
import { projects } from "../../resources/projects";
import Card from "../card/card.component";

function Projects() {
  return (
    <CardsContainer>
      <CardsHeader>Moje portfolio</CardsHeader>
      <CardsSubheader>JS/React</CardsSubheader>
      {projects.map((e,idx) => {
        return (
          <Card
            key={e.title}
            invertOrder={(idx%2===0?0:1)}
            title={e.title}
            demo={e.demo}
            repo={e.repo}
            image={e.image}
            imageAlt={e.imageAlt}
            description={e.description}
          />
        );
      })}
    </CardsContainer>
  );
}

export default Projects;
