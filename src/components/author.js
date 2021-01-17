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
  margin: 1rem 0 1.625rem;

  h2 {
    font-size: 4rem;
    line-height: 3rem;
    margin: 1rem 1rem 0;
    font-family: "Inconsolata", monospace;
    display: block;
    color: ${({ theme }) => theme.secondary};
  }

  p {
    text-align: justify;
    margin: 1rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    border: none;
    margin: calc(2rem + 5px) 0 2.625rem;
    padding: 0;

    section {
      position: relative;
      top: -0.375rem;
    }

    h2 {
      margin: 0 1rem;
      font-size: 4rem;
      line-height: 3rem;
    }

    p {
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
      <MdxContent body={about.body}>
        <h2>Hello!</h2>
      </MdxContent>
    </Container>
  );
};

export default Author;
