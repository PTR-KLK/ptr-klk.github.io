import React, { useEffect } from "react";
import { connect } from "react-redux";
import { globalHistory } from "@reach/router";
import { FaProjectDiagram } from "react-icons/fa";
import { toggleGraphVisible } from "../buttons.actions";

const mapStateToProps = ({ graphVisible }) => {
  return { graphVisible };
};

const GraphButton = ({ graphVisible, toggleGraphVisible }) => {
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";

  useEffect(() => {
    return globalHistory.listen(({ action }) => {
      if (action === "PUSH") toggleGraphVisible(false);
    });
  }, [toggleGraphVisible]);

  return pathname !== "/" ? (
    <button
      aria-label="Toggle graph"
      title="Toggle graph"
      onClick={() => toggleGraphVisible(!graphVisible)}
    >
      <FaProjectDiagram />
    </button>
  ) : null;
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleGraphVisible: (graphVisible) =>
      dispatch(toggleGraphVisible(graphVisible)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GraphButton);
