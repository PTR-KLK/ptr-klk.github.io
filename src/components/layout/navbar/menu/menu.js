import React from "react";
import { connect } from "react-redux";
import { Link } from "gatsby";
import { Container } from "./menu.style";

const mapStateToProps = ({ menuVisible }) => {
  return { menuVisible };
};

const Menu = ({ menuLinks, menuVisible }) => {
  return (
    <Container visible={menuVisible}>
      {menuLinks.map((el) => (
        <Link key={el.name} to={el.link}>
          <p>{el.name}</p>
        </Link>
      ))}
    </Container>
  );
};

export default connect(mapStateToProps, null)(Menu);
