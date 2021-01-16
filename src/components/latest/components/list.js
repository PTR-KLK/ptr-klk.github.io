import React from "react";
import { Link } from "gatsby";

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
const List = ({ list, details }) => {
  return (
    <ul>
      {list.map(({ node }) => (
        <ListItem data={node} key={node.id} details={details} />
      ))}
    </ul>
  );
};

export default List;
