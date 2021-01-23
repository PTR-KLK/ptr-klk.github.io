import React from "react";
import { Container } from "./buttons.style";
import DarkmodeButton from "./darkmodeButton/darkmodeButton";
import GraphButton from "./graphButton/graphButton";
import MenuButton from "./menuButton/menuButton";

const Buttons = () => {
  return (
    <Container>
      <GraphButton />
      <DarkmodeButton />
      <MenuButton />
    </Container>
  );
};

export default Buttons;
