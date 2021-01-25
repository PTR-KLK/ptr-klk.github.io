import styled, { createGlobalStyle } from "styled-components";
import { boxShadow } from "../boxShadow/boxShadow";

export const GlobalStyle = createGlobalStyle`
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
    ${({ theme }) => boxShadow(theme)};
  }

  .gatsby-highlight pre[class*="language-"] {
    margin: 1rem 0;
  }
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
`;
