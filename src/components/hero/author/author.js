import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import MdxContent from "../../mdxWrapper/mdxWrapper";
import { Container, Image, Heading } from "./author.style";

const Author = () => {
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

  return (
    <Container>
      <MdxContent body={frontpage.body}>
        <Image fluid={me.childImageSharp.fluid} objectFit="cover" alt="" />
        <Heading>Hello!</Heading>
      </MdxContent>
    </Container>
  );
};

export default Author;
