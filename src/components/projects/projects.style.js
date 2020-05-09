import styled from 'styled-components';
import { colors } from '../../resources/colors';

export const ProjectsContainer = styled.section`
    padding: 3.75em 0.5em 0.5em;
    background: ${colors.primaryTextLight};
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);


    @media (min-width: 425px) {
        padding: 4.25em 1em 1em;
    }

    @media (min-width: 768px) {
        padding: 5.25em 4em 2em 4em;
    }

    @media (min-width: 1024px) {
        padding: 2em 4em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
    }

`;

export const ProjectsHeader = styled.h1`
    width: 100%;
    margin: 0;
    padding: 0 0 0.125em 0;
    color: ${colors.primaryTextDark};
`;

export const ProjectsSubheader = styled.h2`
    width: 100%;
    margin: 0;
    padding: 0;
    color: ${colors.secondaryText};
`;