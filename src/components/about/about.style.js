import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from '../../resources/colors';

export const AboutContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    height: 100vh;
    padding: 1em;
    background: ${colors.primaryTextLight};
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

    @media (min-width: 768px) {
        padding: 4em;
    }
`;

export const AboutHeader = styled.h1`
    width: 100%;
    margin: 0;
    padding: 0 0 0.125em 0;
    color: ${colors.primaryTextDark};
`;

export const AboutSubheader = styled.h2`
    width: 100%;
    margin: 0;
    padding: 0 0 0.25em 0;
    color: ${colors.secondaryText};
`;

export const AboutParagraph = styled.p`
    width: 100%;
    margin: 0;
    padding: 0.25em 0em;
    text-align: justify;
    color: ${colors.primaryTextDark};
`;

export const AboutLinks = styled.figure`
    width: 100%;
    margin: 0;
    padding: 0.25em 0em;

    & > * {
        padding: 0 0.5em 0 0;
    }
`;

export const AboutIcon = styled(FontAwesomeIcon)`
color: ${colors.primaryTextDark};
`;