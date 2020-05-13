import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createGlobalStyle } from "styled-components";
import { colors } from "./resources/colors.resource";

export const edgeGap = 1;

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${colors.light};
  }
`;

export const FullPageHeight = createGlobalStyle`
  body main {
    height: ${(props) => (props.fullPage ? `100vh` : `auto`)};
  }
`;

export const Main = styled.main`
    padding: 3.75em 0.5em 0.5em;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 425px) {
        padding: 4.25em ${edgeGap}rem ${edgeGap}rem;
    }

    @media (min-width: 768px) {
        padding: 5.25em ${edgeGap}rem ${2*edgeGap}rem ${edgeGap}rem;
    }

    @media (min-width: 1024px) {
        padding: ${2*edgeGap}rem ${2*edgeGap}rem;
        width: 67%;
        position: absolute;
        top: 0;
        left: 33%;
    }

    @media (min-width: 1440px) {
        width: 50%;
        left: 25%;
    }

    @media (min-width: 2560px) {
      width: 34%;
      left: 33%;
    }

`;

export const Header = styled.h1`
  width: 100%;
  margin: 0;
  padding: 0 0 0.125em 0;
  color: ${colors.dark};
`;

export const Subheader = styled.h2`
  width: 100%;
  margin: 0 0 1rem 0;
  color: ${colors.primary};
`;

export const Paragraph = styled.p`
  width: 100%;
  margin: ${edgeGap}rem 0;
  text-align: justify;
  color: ${colors.dark};
`;

export const Links = styled.a`
  display: flex;
`;

export const Icon = styled(FontAwesomeIcon)`
  color: ${colors.primary};
  margin: ${edgeGap}rem 0.25rem 0 0;

  &:hover{
    color: ${colors.accent};
  }
  
`;
