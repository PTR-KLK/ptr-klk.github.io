import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import Menu from "./menu";
import Buttons from "./buttons";

const mapStateToProps = ({ menuVisible }) => {
  return { menuVisible };
};

const Container = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  border-bottom: 2px dashed ${(props) => props.theme.secondary};
  padding: 1rem 0;
  margin: 0 0 1rem;

  @media (min-width: 738px) {
    flex-direction: row;
  }
`;

const Title = styled(Link)`
  font-family: "Inconsolata", monospace;
  text-decoration: none;
  color: ${(props) => props.theme.text};
  width: 112px;

  &:visited {
    color: ${(props) => props.theme.text};
  }

  &:hover {
    color: ${(props) => props.theme.accent};
  }

  p {
    margin: 0;
  }

  h1 {
    font-weight: normal;
    margin: 0;
    font-size: 2rem;
  }
`;

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
