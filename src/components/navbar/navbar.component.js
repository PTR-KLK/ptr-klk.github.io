import React, { useState } from "react";
import {
  NavContainer,
  NavImage,
  NavTitle,
  NavMenu,
  NavMenuItem,
  NavMenuBtn,
  NavFooter,
} from "./navbar.style";
import Me from "../../resources/me.jpg";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const onVisibilityChange = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <NavContainer>
      <NavImage src={Me} alt="Me" />
      <NavTitle>PTR-KLK</NavTitle>

      <NavMenuBtn onClick={onVisibilityChange}>
        <FontAwesomeIcon size="2x" icon={faBars} color="#fff" />
      </NavMenuBtn>
      <NavMenu isVisible={menuVisible}>
        <NavMenuItem onClick={onVisibilityChange} to="/">
          O mnie
        </NavMenuItem>
        <NavMenuItem
          onClick={onVisibilityChange}
          to="/projects"
        >
          Portfolio
        </NavMenuItem>
      </NavMenu>
      <NavFooter>
        <hr></hr>
        <a
          href="https://github.com/PTR-KLK/portfolio-blog-styled"
          target="_blank"
          rel="noopener noreferrer"
        >
          portfolio-blog-styled
        </a>
        <br/>
        by{" "}
        <a
          href="https://github.com/PTR-KLK"
          target="_blank"
          rel="noopener noreferrer"
        >
          PTR-KLK
        </a>
      </NavFooter>
    </NavContainer>
  );
}

export default Navbar;
