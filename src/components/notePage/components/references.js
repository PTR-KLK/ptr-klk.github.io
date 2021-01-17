import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Container = styled.section`
  width: calc(100% - 2rem);
  border: 2px dashed ${(props) => props.theme.secondary};
  margin: 1rem 0;
  padding: 0 1rem;

  ul {
    margin: 1rem 0;
  }
`;

const References = ({ arr, heading }) => {
  if (arr.length === 0) return null;

  return (
    <Container>
      <h3>{heading}</h3>
      <ul>
        {arr.map((el) => {
          return (
            <li key={el.id}>
              <Link to={el.fields.slug}>{el.frontmatter.title}</Link>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default References;
