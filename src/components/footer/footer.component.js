import React from "react";
import { Container } from "./footer.style";

function Footer() {
  return (
    <Container>
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
