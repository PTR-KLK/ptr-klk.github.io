import React from "react";
import { connect } from "react-redux";
import { FaProjectDiagram } from "react-icons/fa";

const GraphButton = ({ toggleGraph }) => {
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";

  return pathname !== "/" ? (
    <button
      aria-label="Toggle graph"
      title="Toggle graph"
      onClick={toggleGraph}
    >
      <FaProjectDiagram />
    </button>
  ) : null;
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleGraph: () => dispatch({ type: `TOGGLE_GRAPH` }),
  };
};

export default connect(null, mapDispatchToProps)(GraphButton);
