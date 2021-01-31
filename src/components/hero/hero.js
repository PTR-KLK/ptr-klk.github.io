import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Graph from "../graph/graphWrapper";
import Author from "./author/author";
import AuthorButton from "./authorButton/authorButton";
import { Container } from "./hero.style";

const Hero = () => {
  const {
    graph: { nodes: graph },
  } = useStaticQuery(graphql`
    query {
      graph: allMarkdownRemark {
        nodes {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
          outboundReferences {
            ... on MarkdownRemark {
              id
              frontmatter {
                title
              }
            }
          }
          inboundReferences {
            ... on MarkdownRemark {
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
      <Author />
      <AuthorButton />
    </Container>
  );
};

export default Hero;
