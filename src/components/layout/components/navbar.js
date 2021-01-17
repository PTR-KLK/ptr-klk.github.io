import React, { useContext } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode";
import { Link } from "gatsby";
import { FaSun, FaMoon } from "react-icons/fa";

const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 0;
  margin: 0 0 1rem;
  border-bottom: 2px dashed ${(props) => props.theme.secondary};

  button {
    border: none;
    background: none;
    cursor: pointer;
    margin: 0 0 0 0.5rem;
    padding: 0;
    display: flex;
    align-items: center;
  }

  a,
  button,
  h1 {
    font-size: 2rem;
    font-family: "Inconsolata", monospace;
  }

  h1 {
    line-height: 1.125rem;
    font-weight: normal;
    margin: 0;
  }

  a {
    margin: 0 auto 0 0;
  }

  svg {
    width: 1.75rem;
    height: 1.75rem;
  }

  a,
  button {
    text-decoration: none;
    font-weight: bold;
    color: ${(props) => props.theme.text};
  }

  a:visited {
    color: ${(props) => props.theme.text};
  }

  a:hover,
  button:hover {
    color: ${(props) => props.theme.accent};
  }
`;

const Navbar = ({ children }) => {
  const themeContext = useContext(ThemeManagerContext);
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Container>
      <Link to={`/`}>
        <h1>{data.site.siteMetadata.title}</h1>
      </Link>
      {children}
      <button
        aria-label="Toggle dark mode"
        title="Toggle dark mode"
        onClick={() => themeContext.toggleDark()}
      >
        {themeContext.isDark ? <FaMoon /> : <FaSun />}
      </button>
    </Container>
  );
};

export default Navbar;
