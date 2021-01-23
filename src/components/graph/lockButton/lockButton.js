import React from "react";
import { connect } from "react-redux";
import { FaLock, FaLockOpen } from "react-icons/fa";
import { Container } from "./lockButton.style";

const mapStateToProps = ({ graphActive }) => {
  return { graphActive };
};

const LockButton = ({ graphActive, toggleGraphActive }) => {
  return (
    <Container
      onClick={toggleGraphActive}
      aria-label="Toggle graph lock/unlock"
      title="Toggle graph lock/unlock"
    >
      {!graphActive ? <FaLock /> : <FaLockOpen />}
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleGraphActive: () => dispatch({ type: `TOGGLE_GRAPH_ACTIVE` }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LockButton);
