import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { colors } from "./resources/colors.resource";

export const edgeGap = 1;

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${colors.light};
  }
`;

export const Main = styled.main`
    margin-top: 4.5em;
    padding: ${edgeGap/2}rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 425px) {
        padding: ${edgeGap}rem;
    }

    @media (min-width: 768px) {
        padding: ${2*edgeGap}rem;
    }

    @media (min-width: 1024px) {
        margin-top: 0;
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
  margin: 0 0 ${edgeGap/4}rem 0;
  color: ${colors.primary};

  @media (min-width: 425px) {
    margin: 0 0 ${edgeGap/2}rem 0;
  }

  @media (min-width: 768px) {
    margin: 0 0 ${edgeGap}rem 0;
}

`;

export const Paragraph = styled.p`
  width: 100%;
  margin: ${edgeGap}rem 0;
  text-align: justify;
  color: ${colors.dark};
`;
