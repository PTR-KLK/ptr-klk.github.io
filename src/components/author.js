import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import MdxContent from "../components/mdxContent";
import { boxShadow } from "./boxShadow";

const Container = styled.section`
  position: relative;
  width: calc(100% - 2rem);
  margin: 1rem 0;
  padding: 1rem 1rem 0;
  text-align: justify;
  background: ${({ theme }) => theme.primary};
  display: flex;
  ${({ theme }) => boxShadow(theme)};
`;

const Image = styled(Img)`
  ${({ theme }) => boxShadow(theme)};
  width: 100%;
  max-width: 192px;
  margin: 1rem auto;
  height: auto;

  @media (min-width: 433px) {
    margin: 0 calc(1rem + 2px) calc(0.5rem + 2px) 0;
    float: left;
  }

  @media (min-width: 768px) {
    max-width: 256px;
  }
`;

const Hello = styled.h2`
  font-size: 3rem;
  line-height: 2rem;
  margin: 0 0 1rem;
  color: ${({ theme }) => theme.secondary};
`;

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
        <Hello>Hello!</Hello>
      </MdxContent>
    </Container>
  );
};

export default Author;
