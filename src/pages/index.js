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
    projects: {
      nodes: [projects],
    },
    contact: {
      nodes: [contact],
    },
  } = data;

  return (
    <Layout>
      <Seo title="Index" description={siteMetadata.description} />
      <Author />
      <Latest />
      <MdxContent body={projects.body}>
        <h2>{projects.frontmatter.title}</h2>
      </MdxContent>
      <MdxContent body={contact.body}>
        <h2>{contact.frontmatter.title}</h2>
      </MdxContent>
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
    projects: allMdx(filter: { frontmatter: { title: { eq: "Projects" } } }) {
      nodes {
        frontmatter {
          title
        }
        body
      }
    }
    contact: allMdx(filter: { frontmatter: { title: { eq: "Contact" } } }) {
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
