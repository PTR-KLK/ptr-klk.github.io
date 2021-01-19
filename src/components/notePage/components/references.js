import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { boxShadow } from "../../boxShadow";

const Container = styled.section`
  position: relative;
  width: calc(100% - 2rem);
  background: ${({ theme }) => theme.primary};
  ${({ theme }) => boxShadow(theme)};
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
