import React from "react";
import { connect } from "react-redux";
import { FaProjectDiagram } from "react-icons/fa";
import { toggleGraphVisible } from "../buttons.actions";

const GraphButton = ({ toggleGraphVisible }) => {
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";

  return pathname !== "/" ? (
    <button
      aria-label="Toggle graph"
      title="Toggle graph"
      onClick={toggleGraphVisible}
    >
      <FaProjectDiagram />
    </button>
  ) : null;
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleGraphVisible: () => dispatch(toggleGraphVisible()),
  };
};

export default connect(null, mapDispatchToProps)(GraphButton);
