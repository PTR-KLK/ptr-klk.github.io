import React, { useContext } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode";
import { FaSun, FaMoon, FaChevronDown, FaChevronUp } from "react-icons/fa";
import useWidth from "./useWidth";

const mapStateToProps = ({ menuVisible }) => {
  return { menuVisible };
};

const Container = styled.section`
  display: flex;
  flex: 1;
  justify-content: flex-end;

  svg {
    width: 1.75rem;
    height: 1.75rem;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    margin: 0 0 0 1rem;
    padding: 0;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${(props) => props.theme.text};
  }

  button:hover {
    color: ${(props) => props.theme.accent};
  }

  @media (min-width: 738px) {
    order: 3;
  }
`;

const Buttons = ({ children, menuVisible, toggleMenuVisible }) => {
  const themeContext = useContext(ThemeManagerContext);
  const width = useWidth();

  return (
    <Container>
      {children}
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
  return { toggleMenuVisible: () => dispatch({ type: `TOGGLE_MENU_VISIBLE` }) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
