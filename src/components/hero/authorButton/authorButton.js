import React from "react";
import { connect } from "react-redux";
import { FaUserAlt, FaUserAltSlash } from "react-icons/fa";
import { Container } from "./authorButton.style";
import { toggleAuthorVisible } from "../hero.actions";

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
    toggleAuthorVisible: () => dispatch(toggleAuthorVisible()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorButton);
