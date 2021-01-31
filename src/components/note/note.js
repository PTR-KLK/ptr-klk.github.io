import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout/layout";
import References from "./references/references";
import Article from "./article/article";
import Graph from "../graph/graphWrapper";
import Seo from "../seo/seo";
import { connect } from "react-redux";

const mapStateToProps = ({ graphVisible }) => {
  return { graphVisible };
};

const Note = ({ data, graphVisible }) => {
  const note = data.markdownRemark;

  return (
    <Layout>
      <Seo
        title={note.frontmatter.title}
        description={note.frontmatter.description}
      />
      {graphVisible ? <Graph data={[note]} /> : null}
      <Article data={note} />
      <References heading="In this note:" arr={note.outboundReferences} />
      <References heading="Reffered in:" arr={note.inboundReferences} />
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
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
        ... on MarkdownRemark {
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
        ... on MarkdownRemark {
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
