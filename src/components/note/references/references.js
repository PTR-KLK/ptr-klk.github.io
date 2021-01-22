import React from "react";
import { Link } from "gatsby";
import { Container } from "./references.style";

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
