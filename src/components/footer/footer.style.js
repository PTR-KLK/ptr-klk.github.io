import styled from 'styled-components';
import { colors } from '../../resources/colors.resource';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { edgeGap } from "../../App.style";

export const Container = styled.footer`
    display: none;

    @media (min-width: 1024px) {
        padding: 0.5em 0;
        font-size: 0.8em;
        display: block;
        width: 10em;
        text-align: center;

        & a {
            text-decoration: none;
            color: ${colors.light};

            &:hover{
                color: ${colors.accent};
            }
        }
    }
`;

export const Links = styled.section`
  display: flex;
  justify-content: center;
`;

export const Icon = styled(FontAwesomeIcon)`
  color: ${colors.light};
  margin: 0 ${edgeGap/2}rem;

  &:hover{
    color: ${colors.accent};
  }
  
`;