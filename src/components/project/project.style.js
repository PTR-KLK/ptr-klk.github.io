import styled from 'styled-components';

export const ProjectContainer = styled.article`
    margin: 0;
`;

export const ProjectHeader = styled.header`
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.125em 0em;
`;

export const ProjectTitle = styled.h3`
    font-size: 1.5em;
    font-weight: bolder;
    margin: 0;
    cursor: pointer;

    @media (min-width: 1441px) {
        cursor: default;
    }

`;

export const ProjectLinks = styled.nav`
    margin: 0;

    & > * {
        padding: 0 0 0 0.5em ;
    }

    @media (max-width: 425px) {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
`;

export const ProjectSummary = styled.summary`
    display: ${props => props.isOpen ? "flex" : "none"};
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 1em 0 0 0;

    @media (min-width: 769px) {
        flex-direction: row;
        justify-content: space-evenly;
    }

    @media (min-width: 1440px) {
        display: flex;
    }

`;

export const ProjectParagraph = styled.p`
    margin: 0;
    text-align: justify;
    width: 80%;
    padding: 0 0 1em 0;

    @media (min-width: 769px) {
        width: 45%;
    }
`;

export const ProjectImg = styled.img`
   width: 80%;
   margin: 0 0 1em 0;
   border: 1px solid #333;

   @media (min-width: 769px) {
    width: 45%;
}
`;