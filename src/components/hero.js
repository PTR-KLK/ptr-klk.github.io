import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { FaUserAlt, FaUserAltSlash } from "react-icons/fa";
import Graph from "../components/graph/graphWrapper";
import Author from "../components/author";

const Container = styled.section`
  position: relative;
  width: 100%;
`;

const AuthorButton = styled.button`
  border: none;
  background: none;
  color: ${({ theme }) => theme.text};
  position: absolute;
  left: 0;
  bottom: 0;
  margin: 0.5rem;

  svg {
    width: 1.75rem;
    height: 1.75rem;
  }

  @media (min-width: 425px) {
    margin: 1rem;

    svg {
      width: 1.825rem;
      height: 1.825rem;
    }
  }
`;

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
