import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Menu from "./menu/menu";
import Buttons from "./buttons/buttons";
import { Container, Title } from "./navbar.style";

const Navbar = ({ children }) => {
  const {
    site: {
      siteMetadata: { title, menuLinks },
    },
  } = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `);

  return (
    <Container>
      <Title to={`/`}>
        <h1>{title}</h1>
      </Title>
      <Buttons children={children} />
      <Menu menuLinks={menuLinks} />
    </Container>
  );
};

export default Navbar;
