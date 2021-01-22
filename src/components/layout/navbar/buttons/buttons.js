import React, { useContext } from "react";
import { connect } from "react-redux";
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode";
import {
  FaProjectDiagram,
  FaSun,
  FaMoon,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import useWidth from "./useWidth/useWidth";
import { Container } from "./buttons.style";

const mapStateToProps = ({ menuVisible }) => {
  return { menuVisible };
};

const Buttons = ({ menuVisible, toggleMenuVisible, toggleGraph }) => {
  const themeContext = useContext(ThemeManagerContext);
  const width = useWidth();

  return (
    <Container>
      <button
        aria-label="Toggle graph"
        title="Toggle graph"
        onClick={toggleGraph}
      >
        <FaProjectDiagram />
      </button>
      <button
        aria-label="Toggle dark mode"
        title="Toggle dark mode"
        onClick={() => themeContext.toggleDark()}
      >
        {themeContext.isDark ? <FaMoon /> : <FaSun />}
      </button>
      {width < 738 ? (
        <button
          aria-label="Toggle menu"
          title="Toggle menu"
          onClick={toggleMenuVisible}
        >
          {menuVisible ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      ) : null}
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenuVisible: () => dispatch({ type: `TOGGLE_MENU_VISIBLE` }),
    toggleGraph: () => dispatch({ type: `TOGGLE_GRAPH` }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
