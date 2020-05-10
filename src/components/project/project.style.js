import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from '../../resources/colors';

export const ProjectContainer = styled.section`
    margin: 1em 0;
    padding: 0 1em;
    width: 100%;
    display: flex;
    flex-direction: column;
    color: ${colors.primaryTextLight};
    background: ${colors.primary};
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    border-radius: 0.75em;

    @media (min-width: 1024px) {
        padding: 1em 0;
        flex-direction: row;
    }

`;

export const ProjectTitle = styled.h3`
    font-size: 1.5em;
    font-weight: bolder;
    margin: 0;
`;

export const ProjectLinks = styled.nav`
    margin: 0;

    & > * {
        margin: 0 0.25em ;
    }
`;

export const ProjectSummary = styled.summary`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0;
    padding: 1em 0;
    order: 2;

    @media (min-width: 1024px) {
        margin: 0 1em;
        padding: 0;
        width: 50%;
        justify-content: center;
    }

`;

export const ProjectParagraph = styled.p`
    margin: 1em 0;
    text-align: justify;
`;

export const ProjectImg = styled.img`
   width: 100%;
   height: auto;
   object-fit: contain;
   margin: 1em 0 0 0;
   padding: 0;
   order: 1;
   box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
   border-radius: 0.75em;

   @media (min-width: 1024px) {
    margin: auto 1em;
    width: 50%;
    order: ${props => props.invertOrder ? 3 : 1};
    }
`;

export const ProjectIcon = styled(FontAwesomeIcon)`
color: ${colors.primaryTextLight};
`;