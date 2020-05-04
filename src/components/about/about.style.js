import styled from 'styled-components';

export const AboutContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    height: 100vh;
    padding: 1em;

    @media (min-width: 426px) {
        padding: 4em;
    }
`;

export const AboutHeader = styled.h1`
    width: 100%;
    margin: 0;
    padding: 0 0 0.125em 0;
`;

export const AboutSubheader = styled.h2`
    width: 100%;
    margin: 0;
    padding: 0 0 0.25em 0;
`;

export const AboutParagraph = styled.p`
    width: 100%;
    margin: 0;
    padding: 0.25em 0em;
    text-align: justify;
`;

export const AboutLinks = styled.figure`
    width: 100%;
    margin: 0;
    padding: 0.25em 0em;

    & > * {
        padding: 0 0.5em 0 0;
    }
`;