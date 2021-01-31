import React from "react";
import { connect } from "react-redux";
import { useStaticQuery, graphql } from "gatsby";
import MdWrapper from "../../mdWrapper/mdWrapper";
import { Container, Image, Heading } from "./author.style";

const mapStateToProps = ({ authorVisible }) => {
  return { authorVisible };
};
const Author = ({ authorVisible }) => {
  const {
    me,
    frontpage: {
      nodes: [frontpage],
    },
  } = useStaticQuery(graphql`
    query {
      me: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 448) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      frontpage: allMarkdownRemark(
        filter: { frontmatter: { title: { eq: "Frontpage" } } }
      ) {
        nodes {
          frontmatter {
            title
          }
          html
        }
      }
    }
  `);

  return authorVisible ? (
    <Container>
      <MdWrapper html={frontpage.html}>
        <Image fluid={me.childImageSharp.fluid} objectFit="cover" alt="" />
        <Heading>Hello!</Heading>
      </MdWrapper>
    </Container>
  ) : null;
};

export default connect(mapStateToProps, null)(Author);
