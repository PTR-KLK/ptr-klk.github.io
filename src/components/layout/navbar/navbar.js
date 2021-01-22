import React from "react";
import { connect } from "react-redux";
import { useStaticQuery, graphql } from "gatsby";
import Menu from "./menu/menu";
import Buttons from "./buttons/buttons";
import { Container, Title } from "./navbar.style";

const mapStateToProps = ({ menuVisible }) => {
  return { menuVisible };
};

const Navbar = ({ children, menuVisible }) => {
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
      <Menu visible={menuVisible} menuLinks={menuLinks} />
    </Container>
  );
};

export default connect(mapStateToProps, null)(Navbar);
