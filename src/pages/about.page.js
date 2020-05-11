import React from "react";
import { FullPageHeight, Header, Subheader, Paragraph, Links , Icon } from "../App.style";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { about } from "../resources/about.resource";

function About() {
  return (
    <>
      <FullPageHeight fullPage={true} />
      <Header>{about.header}</Header>
      <Subheader>{about.subheader}</Subheader>
      <Paragraph>
        {about.description}
      </Paragraph>
      <Links>
      <a
          href={about.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon size="4x" icon={faLinkedin} color="#333" />
        </a>
        <a
          href={about.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon size="4x" icon={faGithubSquare} color="#333" />
        </a>
        <a
          href={about.mail}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon size="4x" icon={faEnvelopeSquare} color="#333" />
        </a>
      </Links>
    </>
  );
}

export default About;
