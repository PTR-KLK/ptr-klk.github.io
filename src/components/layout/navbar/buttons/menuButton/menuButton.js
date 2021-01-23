import React from "react";
import { connect } from "react-redux";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import useWidth from "./useWidth/useWidth";

const mapStateToProps = ({ menuVisible }) => {
  return { menuVisible };
};

const MenuButton = ({ menuVisible, toggleMenuVisible }) => {
  const width = useWidth();

  return width < 738 ? (
    <button
      aria-label="Toggle menu"
      title="Toggle menu"
      onClick={toggleMenuVisible}
    >
      {menuVisible ? <FaChevronUp /> : <FaChevronDown />}
    </button>
  ) : null;
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenuVisible: () => dispatch({ type: `TOGGLE_MENU_VISIBLE` }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuButton);
