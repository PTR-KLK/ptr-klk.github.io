import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../resources/colors.resource";
import backgroundNav from "../../resources/backgroundNav.png";

export const NavContainer = styled.nav`
  position: fixed;
  width: 100vw;
  top: 0;
  padding: 0.5em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.primary};
  color: ${colors.light};

  @media (min-width: 1024px) {
    width: 33%;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    z-index: 2;
    background-image: url(${backgroundNav});
    background-size: cover;
  }

  @media (min-width: 1440px) {
    width: 25%;
  }

  @media (min-width: 2560px) {
    width: 34%;
  }
`;

export const NavImage = styled.img`
  width: 2em;
  height: 2em;
  border-radius: 50%;
  margin: 0 0 0 0.5em;

  @media (min-width: 1024px) {
    width: 10em;
    height: auto;
    margin: 0 0 1em 0;
  }
`;

export const NavTitle = styled.h2`
  margin: 0;
  font-size: 2em;
  font-weight: bolder;
  text-align: center;
`;

export const NavMenu = styled.nav`
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  position: fixed;
  background: ${colors.primaryTransparent};
  width: 100vw;
  height: 100vh;
  z-index: -1;

  @media (min-width: 1024px) {
    background: none;
    display: flex;
    position: static;
    width: auto;
    height: auto;
  }
`;

export const NavMenuItem = styled(Link)`
  text-decoration: none;
  color: ${colors.light};
  font-weight: bolder;
  font-size: 2em;
  padding: 0.5em 0;

  &:hover {
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
