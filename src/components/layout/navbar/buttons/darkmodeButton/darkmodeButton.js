import React, { useContext } from "react";
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkmodeButton = () => {
  const themeContext = useContext(ThemeManagerContext);

  return (
    <button
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      onClick={() => themeContext.toggleDark()}
    >
      {themeContext.isDark ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default DarkmodeButton;
