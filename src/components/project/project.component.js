import React, { useState } from "react";
import {
  ProjectContainer,
  ProjectHeader,
  ProjectImg,
  ProjectParagraph,
  ProjectTitle,
  ProjectSummary,
  ProjectLinks,
} from "../project/project.style";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Project(props) {
  const [isAccordionOpen, setAccordionOpen] = useState(false);

  const onOpenChange = () => {
    setAccordionOpen(!isAccordionOpen);
  };

  return (
    <ProjectContainer>
      <ProjectHeader>
        <ProjectTitle onClick={onOpenChange}>{props.title}</ProjectTitle>
        <ProjectLinks>
        <a
          href={props.repo}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon size="3x" icon={faGithubSquare} color="#333" />
        </a>
        <a
          href={props.demo}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon size="3x" icon={faWindowMaximize} color="#333" />
        </a>
        </ProjectLinks>
      </ProjectHeader>
      <ProjectSummary isOpen={isAccordionOpen}>
        <ProjectImg
          src={props.image}
          alt={props.imageAlt}
        />
        <ProjectParagraph>
          {props.description}
        </ProjectParagraph>
      </ProjectSummary>
      <hr style={{color: "#333"}}></hr>
    </ProjectContainer>
  );
}

export default Project;
