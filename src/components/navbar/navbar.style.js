import styled from 'styled-components';
import { Link } from "react-router-dom";
import { colors } from '../../resources/colors.resource';

export const NavContainer = styled.nav`
    position: fixed;
    width: 100vw;
    top: 0;
    padding: 0.5em 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.primary};
    color: ${colors.primaryTextLight};
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

    @media (min-width: 1024px) {
        width: 30%;
        height: 100vh;
        flex-direction: column;
        justify-content: center;
        z-index: 2;
    }

    @media (min-width: 1440px) {
        width: 20%;
    }

    @media (min-width: 2560px) {
        width: 30%;
    }

`;

export const NavImage = styled.img`
    width: 2em;
    height: 2em;
    border-radius: 50%;
    margin: 0 0 0 0.5em;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

    @media (min-width: 1024px) {
        width: 10em;
        height: auto;
        margin: 0 0 1em 0;
    }

`;

export const NavTitle = styled.h2`
    margin: 0;
    font-size: 2em;
    text-align: center;
`;

export const NavMenu = styled.nav`
    display: ${props => props.isVisible ? "flex" : "none"};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    position: fixed;
    background-color: ${colors.primaryTransparent};
    width: 100vw;
    height: 100vh;
    z-index: -1;

    @media (min-width: 1024px) {
        display: flex;
        position: static;
        width: auto;
        height: auto;
    }
`;

export const NavMenuItem = styled(Link)`
    text-decoration: none;
    color: ${colors.primaryTextLight};
    font-size: 2em;
    padding: 0.5em 0;

    &:hover{
        color: ${colors.accent};
    }

    @media (min-width: 1024px) {
        display: block;
        font-size: 1.5em;
        padding: 0.25em 0;
    }

`;

export const NavMenuBtn = styled.button`
    margin: 0 0.5em 0 0;
    background-color: ${colors.primary};
    border: 0;
    padding: 0;

    @media (min-width: 1024px) {
        display: none;
    }
`;