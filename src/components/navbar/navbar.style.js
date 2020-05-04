import styled from 'styled-components';
import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
    position: fixed;
    width: 100vw;
    top: 0;
    padding: 0.5em 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: #fff;

    @media (min-width: 769px) {
        width: 30%;
        height: 100vh;
        flex-direction: column;
        justify-content: center;
    }

    @media (min-width: 1441px) {
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

    @media (min-width: 769px) {
        width: 10em;
        height: auto;
        margin: 0 0 1em 0;
    }

`;

export const NavTitle = styled.h2`
    margin: 0;
    font-size: 2em;
    text-align: center;

    @media (max-width: 425px) {
        font-weight: normal;
    }
`;

export const NavMenu = styled.nav`
    display: ${props => props.isVisible ? "flex" : "none"};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    position: fixed;
    background-color: rgba(51, 51, 51, 0.8);
    width: 100vw;
    height: 100vh;
    z-index: -1;

    @media (min-width: 769px) {
        display: flex;
        position: static;
        width: auto;
        height: auto;
    }
`;

export const NavMenuItem = styled(Link)`
    text-decoration: none;
    color: #fff;
    font-size: 2em;
    padding: 0.5em 0;

    &:hover{
        color: #9D9C9C;
    }

    @media (min-width: 769px) {
        display: block;
        font-size: 1.5em;
        padding: 0.25em 0;
    }

`;

export const NavMenuBtn = styled.button`
    margin: 0 0.5em 0 0;
    background-color: #333;
    border: 0;
    padding: 0;

    @media (min-width: 769px) {
        display: none;
    }
`;

export const NavFooter = styled.footer`
    display: none;

    @media (min-width: 769px) {
        padding: 0.5em 0;
        font-size: 0.8em;
        display: block;
        width: 10em;
        text-align: center;

        & a {
            text-decoration: none;
            color: #fff;

            &:hover{
                color: #9D9C9C;
            }
        }
    }
`;