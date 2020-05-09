import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { colors } from './resources/colors';

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${colors.primaryLight};
  }
`

export const Main = styled.main`
    @media (min-width: 1024px) {
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