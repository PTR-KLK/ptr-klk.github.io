import styled from 'styled-components';
import { colors } from '../../resources/colors.resource';


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