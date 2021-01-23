import React from "react";
import { connect } from "react-redux";
import { FaUserAlt, FaUserAltSlash } from "react-icons/fa";
import { Container } from "./authorButton.style";

const mapStateToProps = ({ authorVisible }) => {
  return { authorVisible };
};

const AuthorButton = ({ authorVisible, toggleAuthorVisible }) => {
  return (
    <Container
      aria-label="Toggle author info"
      title="Toggle author info"
      onClick={toggleAuthorVisible}
    >
      {authorVisible ? <FaUserAlt /> : <FaUserAltSlash />}
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleAuthorVisible: () => dispatch({ type: `TOGGLE_AUTHOR_VISIBLE` }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorButton);
