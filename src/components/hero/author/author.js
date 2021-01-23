import React from "react";
import { connect } from "react-redux";
import { useStaticQuery, graphql } from "gatsby";
import MdxWrapper from "../../mdxWrapper/mdxWrapper";
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
      frontpage: allMdx(
        filter: { frontmatter: { title: { eq: "Frontpage" } } }
      ) {
        nodes {
          frontmatter {
            title
          }
          body
        }
      }
    }
  `);

  return authorVisible ? (
    <Container>
      <MdxWrapper body={frontpage.body}>
        <Image fluid={me.childImageSharp.fluid} objectFit="cover" alt="" />
        <Heading>Hello!</Heading>
      </MdxWrapper>
    </Container>
  ) : null;
};

export default connect(mapStateToProps, null)(Author);
