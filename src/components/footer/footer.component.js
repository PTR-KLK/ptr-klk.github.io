import React from "react";
import { Container, Links , Icon  } from "./footer.style";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { navbar } from "../../resources/navbar.resource";

function Footer() {
  return (
    <Container>
      <Links>
      <a
          href={navbar.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon size="3x" icon={faLinkedin} color="#333" />
        </a>
        <a
          href={navbar.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon size="3x" icon={faGithubSquare} color="#333" />
        </a>
        <a
          href={navbar.mail}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon size="3x" icon={faEnvelopeSquare} color="#333" />
        </a>
      </Links>
      <hr></hr>
      by{" "}
      <a
        href="https://github.com/PTR-KLK"
        target="_blank"
        rel="noopener noreferrer"
      >
        PTR-KLK
      </a>
      <br />
      <a
        href="https://github.com/PTR-KLK/portfolio-blog-styled"
        target="_blank"
        rel="noopener noreferrer"
      >
        portfolio-blog-styled
      </a>
    </Container>
  );
}

export default Footer;
