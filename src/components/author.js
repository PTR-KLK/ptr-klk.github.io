import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import MdxContent from "./mdxContent";

const Container = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0 2rem;

  h2 {
    line-height: 2.875rem;
    position: absolute;
    top: calc(194px - 2.875rem);
    margin: 0;
    left: 1rem;
    font-size: 4rem;
    font-family: "Inconsolata", monospace;
    display: block;
    color: ${({ theme }) => theme.secondary};
  }

  p {
    position: relative;
    text-align: justify;
    margin: 1rem;
  }

  @media (min-width: 320px) {
    h2 {
      top: calc(256px - 3.375rem);
      line-height: 3.375rem;
      font-size: 5rem;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    border: none;
    margin: calc(2rem + 5px) 0 3rem;
    padding: 0;

    h2 {
      left: 141px;
      top: 0;
    }

    p {
      top: 2rem;
      margin: 1rem calc(2rem + 5px) 1rem 1rem;
    }
  }
`;

const Stripes = styled.div`
  position: absolute;
  top: 1rem;
  left: 0;
  width: calc(100% + 6px - 1rem);
  z-index: 1;
  height: calc(100% - 1rem);
  border-style: solid dashed dashed solid;
  border-color: ${({ theme }) => theme.secondary};
  border-width: 5px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: -5px;
    height: 50%;
    width: 5px;
    z-index: 2;
    background: ${({ theme }) => theme.body};
  }

  &::before {
    content: "";
    position: absolute;
    right: -5px;
    top: 0;
    width: 5px;
    height: 50%;
    z-index: 2;
    background: ${({ theme }) => theme.body};
  }

  @media (min-width: 768px) {
    top: calc(-5px - 1rem);
    left: 1rem;
    width: calc(100% + 6px - 3rem);
    height: calc(100% + 2rem + 5px);

    &::after {
      bottom: -5px;
      left: 0;
      height: 5px;
      width: 50%;
    }

    &::before {
      right: 0;
      top: -5px;
      height: 5px;
      width: 50%;
      z-index: 1;
    }
  }
`;

const Image = styled(Img)`
  width: 100%;
  max-width: 192px;
  height: auto;

  @media (min-width: 320px) {
    max-width: 256px;
  }
`;

const Author = () => {
  const {
    me,
    about: {
      nodes: [about],
    },
  } = useStaticQuery(graphql`
    {
      me: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 448) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      about: allMdx(filter: { frontmatter: { title: { eq: "About" } } }) {
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
      <Stripes />
      <Image fluid={me.childImageSharp.fluid} objectFit="cover" alt="" />
      <h2>Hello!</h2>
      <MdxContent body={about.body} />
    </Container>
  );
};

export default Author;
