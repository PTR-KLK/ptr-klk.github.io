import React from "react";
import {
  ProjectContainer,
  ProjectImg,
  ProjectParagraph,
  ProjectTitle,
  ProjectSummary,
  ProjectLinks,
  ProjectIcon,
} from "../project/project.style";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";

function Project(props) {
  return (
    <ProjectContainer>
      <ProjectImg
        invertOrder={props.invertOrder}
        src={props.image}
        alt={props.imageAlt}
      />
      <ProjectSummary>
        <ProjectTitle>{props.title}</ProjectTitle>
        <ProjectParagraph>{props.description}</ProjectParagraph>
        <ProjectLinks>
          <a href={props.repo} target="_blank" rel="noopener noreferrer">
            <ProjectIcon size="3x" icon={faGithubSquare} color="#333" />
          </a>
          {props.demo ? (
            <a href={props.demo} target="_blank" rel="noopener noreferrer">
              <ProjectIcon size="3x" icon={faWindowMaximize} color="#333" />
            </a>
          ) : null}
        </ProjectLinks>
      </ProjectSummary>
    </ProjectContainer>
  );
}

export default Project;
