import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { rgba, darken, lighten } from "polished";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const GlobalStyle = createGlobalStyle`
  body,html {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
  }

  h1, h2, h3, h4, h5 {
    font-family: "Inconsolata", monospace;
  }

  a {
    color: ${(props) => props.theme.text};
  }

  a:visited {
    color: unset;
  }

  a:hover, a:active, a[target="_blank"]:hover {
    color: ${(props) => props.theme.accent};
  }

  a[target="_blank"] {
    color: ${(props) => props.theme.secondary};
  }

  ul {
    list-style: square;
    padding: 0 0 0 2rem;
  }

  .gatsby-highlight {
    box-shadow: 4px 4px 0px 0px ${(props) => rgba(props.theme.secondary, 0.8)};
  }

  .gatsby-highlight pre[class*="language-"] {
    margin: 1rem 0;
  }
`;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 1rem);
  max-width: 768px;
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;

  @media (min-width: 320px) {
    width: calc(100% - 2rem);
  }
`;

const Layout = ({ children, button }) => {
  return (
    <Container>
      <GlobalStyle />
      <Navbar>{button}</Navbar>
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
