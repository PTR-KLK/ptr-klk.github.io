import React from "react";
import { Link } from "gatsby";
import { Container } from "./menu.style";

const Menu = ({ menuLinks, visible }) => {
  return (
    <Container visible={visible}>
      {menuLinks.map((el) => (
        <Link key={el.name} to={el.link}>
          <p>{el.name}</p>
        </Link>
      ))}
    </Container>
  );
};

export default Menu;
