import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../../resources/colors.resource";
import { edgeGap } from "../../App.style";

export const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0;
    margin: ${2*edgeGap}rem 0;

    & li {
      font-size: ${1.125*edgeGap}rem;
      margin: 0;
    }

    @media (min-width: 375px) {
      & li {
        font-size: ${1.25*edgeGap}rem;
      }
    }

    @media (min-width: 768px) {
      margin: 0 0 ${edgeGap}rem 0;

      & li {
        font-size: ${1.125*edgeGap}rem;
      }
    }

    @media (min-width: 1440px) {
      margin: 0 0 ${edgeGap}rem 0;

      & li {
        font-size: ${1.375*edgeGap}rem;
      }
    }

`;

export const Links = styled.nav`
  & > * {
    margin: 0 ${edgeGap/2}rem;
  }
`;

export const Summary = styled.summary`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  order: 2;

  @media (min-width: 768px) {
    width: 30%;
    justify-content: center;
    margin: ${(props) =>
      props.invertOrder
        ? `auto ${edgeGap}rem auto 0`
        : `auto 0 auto ${edgeGap}rem`};
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  order: 1;

  @media (min-width: 768px) {
    margin: ${(props) =>
      props.invertOrder
        ? `auto 0 auto ${edgeGap}rem`
        : `auto ${edgeGap}rem auto 0`};
    width: 70%;
    order: ${(props) => (props.invertOrder ? 3 : 1)};
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  color: ${colors.light};

  &:hover{
    color: ${colors.accent};
  }

`;
