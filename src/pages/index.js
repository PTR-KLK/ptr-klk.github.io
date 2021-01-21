import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import Hero from "../components/hero";
import Latest from "../components/latest/latest";

const Home = ({ data }) => {
  const {
    site: { siteMetadata },
  } = data;

  return (
    <Layout>
      <Seo title="Index" description={siteMetadata.description} />
      <Hero />
      <Latest />
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
  }
`;
export default Home;
