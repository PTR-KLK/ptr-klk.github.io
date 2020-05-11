import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createGlobalStyle } from "styled-components";
import { colors } from "./resources/colors.resource";

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${colors.primaryLight};
  }
`;

export const FullPageHeight = createGlobalStyle`
  body main {
    height: ${(props) => (props.fullPage ? `100vh` : `auto`)};
  }
`;

export const Main = styled.main`
    padding: 3.75em 0.5em 0.5em;
    background: ${colors.primaryTextLight};
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 425px) {
        padding: 4.25em 1em 1em;
    }

    @media (min-width: 768px) {
        padding: 5.25em 4em 2em 4em;
    }

    @media (min-width: 1024px) {
        padding: 2em 4em;
        width: 70%;
        position: absolute;
        top: 0;
        left: 30%;
    }

    @media (min-width: 1440px) {
        width: 60%;
        left: 20%
    }

    @media (min-width: 2560px) {
        width: 40%;
        left: 30%
    }

`;

export const Header = styled.h1`
  width: 100%;
  margin: 0;
  padding: 0 0 0.125em 0;
  color: ${colors.primaryTextDark};
`;

export const Subheader = styled.h2`
  width: 100%;
  margin: 0 0 1rem 0;
  color: ${colors.secondaryText};
`;

export const Paragraph = styled.p`
  width: 100%;
  margin: 1rem 0;
  text-align: justify;
  color: ${colors.primaryTextDark};
`;

export const Links = styled.a`
  display: flex;
`;

export const Icon = styled(FontAwesomeIcon)`
  color: ${colors.primaryTextDark};
  margin: 1rem 0.25rem 0 0;
`;
