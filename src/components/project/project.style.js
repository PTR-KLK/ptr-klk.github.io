import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from '../../resources/colors';

const edgeGap = 1;

export const ProjectCard = styled.section`
    margin: 1rem 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    color: ${colors.primaryTextLight};
    background: ${colors.primary};
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    border-radius: ${edgeGap}rem;
`;

export const ProjectContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: ${edgeGap/2}rem 0 ${edgeGap}rem 0;
    padding: 0 ${edgeGap}rem;

    @media (min-width: 1024px) {
        flex-direction: row;
        padding: 0;
    }
`;

export const ProjectTitle = styled.h3`
    text-align: center;
    font-size: 1.5em;
    font-weight: bolder;
    margin: ${edgeGap}rem 0 ${edgeGap/2}rem 0;
`;

export const ProjectLinks = styled.nav`
    & > * {
        margin: 0 0.25em ;
    }
`;

export const ProjectSummary = styled.summary`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    order: 2;

    @media (min-width: 1024px) {
        width: 50%;
        justify-content: center;
        margin: ${props => props.invertOrder ? `auto ${edgeGap/2}rem auto ${edgeGap}rem` : `auto ${edgeGap}rem auto ${edgeGap/2}rem`};
    }

`;

export const ProjectParagraph = styled.p`
    margin: ${edgeGap}rem 0;
    text-align: justify;

    @media (min-width: 1024px) {
        margin: 0 0 ${edgeGap}rem 0;
    }
`;

export const ProjectImg = styled.img`
   width: 100%;
   height: auto;
   object-fit: contain;
   order: 1;
   box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
   border-radius: ${edgeGap}rem;

   @media (min-width: 1024px) {
    margin: ${props => props.invertOrder ? `auto ${edgeGap}rem auto ${edgeGap/2}rem` : `auto ${edgeGap/2}rem auto ${edgeGap}rem`};
    width: 50%;
    order: ${props => props.invertOrder ? 3 : 1};
    }
`;

export const ProjectIcon = styled(FontAwesomeIcon)`
color: ${colors.primaryTextLight};
`;