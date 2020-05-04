import React from "react";
import {
  AboutContainer,
  AboutHeader,
  AboutSubheader,
  AboutParagraph,
  AboutLinks,
} from "../about/about.style";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { about } from "../../resources/about";

function About() {
  return (
    <AboutContainer>
      <AboutHeader>{about.header}</AboutHeader>
      <AboutSubheader>{about.subheader}</AboutSubheader>
      <AboutParagraph>
        {about.description}
      </AboutParagraph>
      <AboutLinks>
        <a
          href={about.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon size="4x" icon={faLinkedin} color="#333" />
        </a>
        <a
          href={about.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon size="4x" icon={faGithubSquare} color="#333" />
        </a>
        <a
          href={about.mail}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon size="4x" icon={faEnvelopeSquare} color="#333" />
        </a>
      </AboutLinks>
    </AboutContainer>
  );
}

export default About;
