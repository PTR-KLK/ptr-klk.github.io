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
import Me from "../../resources/me.png";
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
      <NavTitle>Site Title</NavTitle>

      <NavMenuBtn onClick={onVisibilityChange}>
        <FontAwesomeIcon size="2x" icon={faBars} color="#fff" />
      </NavMenuBtn>
      <NavMenu isVisible={menuVisible}>
        <NavMenuItem onClick={onVisibilityChange} to="/portfolio-blog-styled/">
          About
        </NavMenuItem>
        <NavMenuItem
          onClick={onVisibilityChange}
          to="/portfolio-blog-styled/projects"
        >
          Projects
        </NavMenuItem>
      </NavMenu>
      <NavFooter>
        <hr></hr>
        by{" "}
        <a
          href="https://github.com/PTR-KLK"
          target="_blank"
          rel="noopener noreferrer"
        >
          PTR-KLK
        </a>
        <br/>
        <a
          href="https://github.com/PTR-KLK/portfolio-blog-styled"
          target="_blank"
          rel="noopener noreferrer"
        >
          portfolio-blog-styled
        </a>
      </NavFooter>
    </NavContainer>
  );
}

export default Navbar;
