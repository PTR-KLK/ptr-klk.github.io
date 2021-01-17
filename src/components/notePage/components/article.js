import React from "react";
import styled from "styled-components";
import { lighten } from "polished";
import Img from "gatsby-image";
import { sectionContainer } from "../../sectionContainer";
import MdxContent from "../../mdxContent";

const Container = styled.article`
  width: 100%;
  height: 100%;
  flex: 1;

  h2 {
    margin: 1.25rem 0;
  }

  section {
    border-top: 2px dashed ${(props) => props.theme.secondary};
  }

  .gatsby-image-wrapper,
  .gatsby-resp-image-wrapper {
    ${({ theme }) => sectionContainer(theme)};
    width: 100%;
    margin: 1rem 0 0.5rem;
  }

  blockquote {
    ${({ theme }) => sectionContainer(theme)};
    display: block;
    width: unset;
    margin: 1rem 0;
    border-left: 10px solid ${(props) => lighten(-0.05, props.theme.primary)};
    background: ${(props) => lighten(0.05, props.theme.primary)};
    padding: 1rem;

    p:first-of-type {
      margin-top: 0;
    }

    p:last-of-type {
      margin-bottom: 0;
    }
  }
`;

const convertDate = (str) => {
  const date = new Date(str);
  return date.toLocaleDateString();
};

const Article = ({ data }) => {
  const {
    body,
    frontmatter: {
      title,
      date,
      last_modified,
      description,
      cover_image,
      cover_image_alt,
    },
  } = data;

  return (
    <Container>
      {cover_image && cover_image_alt ? (
        <Img fluid={cover_image.childImageSharp.fluid} alt={cover_image_alt} />
      ) : null}
      <h2>{title}</h2>
      <p>
        <span>Published:</span> {convertDate(date)}
        {last_modified !== date ? (
          <>
            {` | `} <span>Modified:</span>
            {convertDate(last_modified)}
          </>
        ) : null}
      </p>
      <p>{description}</p>
      <MdxContent body={body} />
    </Container>
  );
};

export default Article;
