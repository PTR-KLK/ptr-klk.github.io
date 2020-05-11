import React, { useState } from "react";
import {
  NavContainer,
  NavImage,
  NavTitle,
  NavMenu,
  NavMenuItem,
  NavMenuBtn,
} from "./navbar.style";
import Footer from "../footer/footer.component"
import Me from "../../resources/me.png";
import { navbar } from "../../resources/navbar.resource";
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
      <NavTitle>{navbar.header}</NavTitle>

      <NavMenuBtn onClick={onVisibilityChange}>
        <FontAwesomeIcon size="2x" icon={faBars} color="#fff" />
      </NavMenuBtn>
      <NavMenu isVisible={menuVisible}>
        {navbar.arr.map((e) => {
          return (
            <NavMenuItem onClick={onVisibilityChange} to={e.to}>
              {e.name}
            </NavMenuItem>
          );
        })}
      </NavMenu>
      <Footer />
    </NavContainer>
  );
}

export default Navbar;
