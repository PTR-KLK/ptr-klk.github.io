import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import Latest from "../components/latest/latest";
import Graph from "../components/graph/graphWrapper";
import MdxContent from "../components/mdxContent";

const Home = ({ data }) => {
  const {
    site: { siteMetadata },
    graph: { nodes: graph },
    frontpage: {
      nodes: [frontpage],
    },
  } = data;

  return (
    <Layout>
      <Seo title="Index" description={siteMetadata.description} />
      <MdxContent body={frontpage.body}>
        <h2>Hello!</h2>
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
    frontpage: allMdx(filter: { frontmatter: { title: { eq: "Frontpage" } } }) {
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
