import React from "react";
import Img from "gatsby-image";
import MdxContent from "../../mdxWrapper/mdxWrapper";
import { Container, Info } from "./article.style";

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
      <Info>
        {cover_image && cover_image_alt ? (
          <Img
            fluid={cover_image.childImageSharp.fluid}
            alt={cover_image_alt}
          />
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
      </Info>
      <MdxContent body={body} />
    </Container>
  );
};

export default Article;
