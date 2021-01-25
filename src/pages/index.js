import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import Seo from "../components/seo/seo";
import Hero from "../components/hero/hero";
import List from "../components/list/list";

const Home = ({ data }) => {
  const {
    site: { siteMetadata },
    recommended: { edges: recommended },
    latest: { edges: latest },
  } = data;

  return (
    <Layout>
      <Seo title="Index" description={siteMetadata.description} />
      <Hero />
      <List heading="Recommended notes:" list={recommended} />
      <List heading="Latest updates:" list={latest} />
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
    recommended: allMdx(
      filter: { frontmatter: { recommended: { eq: true } } }
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
`;
export default Home;
