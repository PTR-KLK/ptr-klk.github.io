import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { boxShadow } from "../../boxShadow";

const Container = styled.section`
  width: calc(100% - 2rem);
  max-width: 768px;
  background: ${({ theme }) => theme.primary};
  ${({ theme }) => boxShadow(theme)};
  margin: 1rem 0 0;
  padding: 0 0.5rem;

  ul {
    margin: 1rem 0;
  }

  @media (min-width: 425px) {
    padding: 0 1rem;
    width: calc(100% - 4rem);
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
