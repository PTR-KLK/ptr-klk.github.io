import React from "react";
import { Header, Subheader, Paragraph } from "../App.style";
import { about } from "../resources/about.resource";

function About() {
  return (
    <>
      <Header>{about.header}</Header>
      <Subheader>{about.subheader}</Subheader>
      <Paragraph>
        {about.description}
      </Paragraph>
    </>
  );
}

export default About;
