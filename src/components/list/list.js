import React from "react";
import { Link } from "gatsby";
import { Container } from "./list.style";

const convertDate = (str) => {
  const date = new Date(str);
  return date.toLocaleDateString();
};

const ListItem = ({ data }) => {
  return (
    <li>
      <h3>
        <span>{convertDate(data.frontmatter.last_modified)} — </span>
        <Link to={data.fields.slug}>{data.frontmatter.title} </Link>
      </h3>
      <p>{data.frontmatter.description || data.excerpt}</p>
    </li>
  );
};
const List = ({ heading, list, details }) => {
  return (
    <Container>
      <h2>{heading}</h2>
      <ul>
        {list.map(({ node }) => (
          <ListItem data={node} key={node.id} details={details} />
        ))}
      </ul>
    </Container>
  );
};

export default List;
