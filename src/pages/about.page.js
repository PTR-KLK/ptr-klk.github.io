import React from "react";
import { Header, Subheader } from "../App.style";
import { about } from "../resources/about.resource";
import Card from "../components/card/card.component";
import AboutInfo from "../components/about/about.component";

function About() {
  return (
    <>
      <Header>{about.header}</Header>
      <Subheader>{about.subheader}</Subheader>
      {about.arr.map((e, idx) => {
        return (
          <Card
            key={`a${idx}`}
            invertOrder={idx % 2 === 0 ? 0 : 1}
            title={e.title}
          >
            <AboutInfo
              description={e.description}
              icon={e.icon}
            />
          </Card>
        );
      })}
    </>
  );
}

export default About;
