import React, { useEffect } from "react";
import { connect } from "react-redux";
import { globalHistory } from "@reach/router";
import { FaLock, FaLockOpen } from "react-icons/fa";
import { Container } from "./lockButton.style";
import { toggleGraphActive } from "../graph.actions";

const mapStateToProps = ({ graphActive }) => {
  return { graphActive };
};

const LockButton = ({ graphActive, toggleGraphActive }) => {
  useEffect(() => {
    return globalHistory.listen(({ action }) => {
      if (action === "PUSH") toggleGraphActive(false);
    });
  }, [toggleGraphActive]);

  return (
    <Container
      onClick={() => toggleGraphActive(!graphActive)}
      aria-label="Toggle graph lock/unlock"
      title="Toggle graph lock/unlock"
    >
      {!graphActive ? <FaLock /> : <FaLockOpen />}
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleGraphActive: (graphActive) =>
      dispatch(toggleGraphActive(graphActive)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LockButton);
