import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Container = styled.section`
  display: ${({ visible }) => (visible ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  width: 100%;

  p {
    font-size: 1.125rem;
    margin: 1rem 0 0;
  }

  a {
    font-family: "Inconsolata", monospace;
    text-decoration: none;
    color: ${(props) => props.theme.text};
  }

  a:visited {
    color: ${(props) => props.theme.text};
  }

  a:hover,
  button:hover {
    color: ${(props) => props.theme.accent};
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    order: 2;
    width: unset;
    margin: 0;

    p {
      margin: 0.25rem 0.5rem;
    }

    a:first-of-type {
      margin: 0;
    }
  }
`;

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
