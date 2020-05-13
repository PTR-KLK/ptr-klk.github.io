import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../../resources/colors.resource";
import { edgeGap } from "../../App.style";



export const CardContainer = styled.section`
  margin: 1rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${colors.light};
  
  background: ${(props) => props.invertOrder ? colors.secondary : colors.primary};
`;

export const CardContent = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: ${edgeGap / 2}rem 0 ${edgeGap}rem 0;
  padding: 0 ${edgeGap}rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 0;
  }
`;

export const CardTitle = styled.h3`
  text-align: center;
  font-size: 1.5em;
  font-weight: bolder;
  margin: ${edgeGap}rem 0 ${edgeGap / 2}rem 0;
`;

export const CardLinks = styled.nav`
  & > * {
    margin: 0 0.25em;
  }
`;

export const CardSummary = styled.summary`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  order: 2;

  @media (min-width: 1024px) {
    width: 50%;
    justify-content: center;
    margin: ${(props) =>
      props.invertOrder
        ? `auto ${edgeGap / 2}rem auto ${edgeGap}rem`
        : `auto ${edgeGap}rem auto ${edgeGap / 2}rem`};
  }
`;

export const CardParagraph = styled.p`
  margin: ${edgeGap}rem 0;
  text-align: justify;

  @media (min-width: 1024px) {
    margin: 0 0 ${edgeGap}rem 0;
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  order: 1;

  @media (min-width: 1024px) {
    margin: ${(props) =>
      props.invertOrder
        ? `auto ${edgeGap}rem auto ${edgeGap / 2}rem`
        : `auto ${edgeGap / 2}rem auto ${edgeGap}rem`};
    width: 50%;
    order: ${(props) => (props.invertOrder ? 3 : 1)};
  }
`;

export const CardIcon = styled(FontAwesomeIcon)`
  color: ${colors.light};

  &:hover{
    color: ${colors.accent};
  }

`;
