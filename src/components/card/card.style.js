import styled from "styled-components";
import { colors } from "../../resources/colors.resource";
import { edgeGap } from "../../App.style";

export const Container = styled.section`
  margin: ${edgeGap/4}rem 0;
  padding: ${2*edgeGap}rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${colors.light};
  
  background: ${(props) => props.invertOrder ? colors.secondary : colors.primary};

  @media (min-width: 425px) {
    margin: ${edgeGap/2}rem 0;
  }

  @media (min-width: 768px) {
    margin: ${edgeGap}rem 0;
    padding: ${3*edgeGap}rem;
  }
`;

export const Content = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Title = styled.h3`
  text-align: center;
  font-size: 1.5em;
  font-weight: normal;
  margin: 0 0 ${2*edgeGap}rem 0;

  @media (min-width: 375px) {
    font-size: 1.625em;
  }

  @media (min-width: 768px) {
    margin: 0 0 ${3*edgeGap}rem 0;
    font-size: 1.75em;
  }

  @media (min-width: 1024px) {
    font-size: 1.5em;
  }

  @media (min-width: 1440px) {
    font-size: 1.625em;
  }

  @media (min-width: 1920px) {
    font-size: 2em;
  }
`;