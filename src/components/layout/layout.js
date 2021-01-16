import React from "react";
import styled, { createGlobalStyle } from "styled-components";
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
    color: ${(props) => props.theme.secondary};
  }

  a:visited {
    color: ${(props) => props.theme.text};
  }

  a:hover, a:active {
    color: ${(props) => props.theme.accent};
  }

  ul {
    list-style: square;
    padding: 0 0 0 2rem;
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
