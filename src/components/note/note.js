import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout/layout";
import References from "./references/references";
import Article from "./article/article";
import Graph from "../graph/graphWrapper";
import Seo from "../seo/seo";
import { connect } from "react-redux";

const mapStateToProps = ({ graph }) => {
  return { graph };
};

const Note = ({ data, graph }) => {
  const note = data.mdx;

  return (
    <Layout>
      <Seo
        title={note.frontmatter.title}
        description={note.frontmatter.description}
      />
      {graph ? <Graph data={[note]} /> : null}
      <Article data={note} />
      <References heading="In this note:" arr={note.outboundReferences} />
      <References heading="Reffered in:" arr={note.inboundReferences} />
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        title
        date
        description
        last_modified
        cover_image_alt
        cover_image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
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
          fields {
            slug
          }
        }
      }
      inboundReferences {
        ... on Mdx {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default connect(mapStateToProps, null)(Note);
