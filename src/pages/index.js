import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import Latest from "../components/latest/latest";
import Graph from "../components/graph/graphWrapper";
import Author from "../components/author";
import MdxContent from "../components/mdxContent";

const Home = ({ data }) => {
  const {
    site: { siteMetadata },
    graph: { nodes: graph },
    recommended: {
      nodes: [recommended],
    },
  } = data;

  return (
    <Layout>
      <Seo title="Index" description={siteMetadata.description} />
      <Author />
      <MdxContent body={recommended.body}>
        <h2>{recommended.frontmatter.title}</h2>
      </MdxContent>
      <Latest />
      <Graph data={graph} />
    </Layout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
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
    recommended: allMdx(
      filter: { frontmatter: { title: { eq: "Recommended" } } }
    ) {
      nodes {
        frontmatter {
          title
        }
        body
      }
    }
  }
`;
export default Home;
