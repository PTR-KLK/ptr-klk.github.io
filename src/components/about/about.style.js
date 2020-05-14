import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../../resources/colors.resource";
import { edgeGap } from "../../App.style";


export const Icons = styled.nav`
  width: 100%;
  ${(props) => props.multiple ? 
    `display: grid;
     grid-template-columns: 1fr;
     justify-items: center;
     align-items: center;` : 
    `display: flex;
     justify-content: center;
     &:last-child {
      grid-column: 1 / 3;
    }`}

    @media (min-width: 375px) {
      ${(props) => props.multiple ? 
        `grid-template-columns: 1fr 1fr;`: 
         null }
    }

  @media (min-width: 768px) {
    width: ${(props) => (props.multiple ? "100%" : "50%")};
    ${(props) => props.multiple ? 
      `grid-template-columns: 1fr 1fr 1fr;`: 
       null }
    margin: auto 0;
  }

  @media (min-width: 1920px) {
    ${(props) => props.multiple ? 
      `grid-template-columns: 1fr 1fr 1fr 1fr 1fr;`: 
       null }
  }
`;

export const IconWrapper = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconText = styled.figcaption`
  text-align: center;
`;

export const Icon = styled(FontAwesomeIcon)`
  text-align: center;
  color: ${colors.light};
  ${(props) => props.multiple ? 
    `margin: 0 0 0.25em 0;` : 
     null }
`;

export const Paragraph = styled.p`
  margin: ${2*edgeGap}rem 0 0;
  text-align: justify;

  @media (min-width: 768px) {
    margin: 0;
    width: 50%;
  }
`;
