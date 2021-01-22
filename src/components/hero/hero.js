import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { FaUserAlt, FaUserAltSlash } from "react-icons/fa";
import Graph from "../graph/graphWrapper";
import Author from "./author/author";
import { Container, AuthorButton } from "./hero.style";

const Hero = () => {
  const [authorVisible, setAuthorVisible] = useState(true);

  const {
    graph: { nodes: graph },
  } = useStaticQuery(graphql`
    query {
      graph: allMdx {
        nodes {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
          outboundReferences {
            ... on Mdx {
              id
              frontmatter {
                title
              }
            }
          }
          inboundReferences {
            ... on Mdx {
              id
              frontmatter {
                title
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Container>
      <Graph data={graph} />
      {authorVisible ? <Author /> : null}
      <AuthorButton
        aria-label="Toggle author info"
        title="Toggle author info"
        onClick={() => setAuthorVisible(!authorVisible)}
      >
        {authorVisible ? <FaUserAlt /> : <FaUserAltSlash />}
      </AuthorButton>
    </Container>
  );
};

export default Hero;
