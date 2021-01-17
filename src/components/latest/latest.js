import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import List from "./components/list";

const Latest = () => {
  const {
    latest: { edges: latest },
  } = useStaticQuery(graphql`
    query {
      latest: allMdx(
        limit: 5
        sort: { fields: frontmatter___last_modified, order: DESC }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              description
              date
              last_modified
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <section>
      <h2>Latest updates:</h2>
      <List list={latest} />
    </section>
  );
};

export default Latest;
