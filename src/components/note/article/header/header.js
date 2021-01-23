import React from "react";
import Img from "gatsby-image";
import { Container } from "./header.style";

const convertDate = (str) => {
  const date = new Date(str);
  return date.toLocaleDateString();
};

const Header = ({ frontmatter }) => {
  const {
    title,
    date,
    last_modified,
    description,
    cover_image,
    cover_image_alt,
  } = frontmatter;

  return (
    <Container>
      {cover_image && cover_image_alt ? (
        <Img fluid={cover_image.childImageSharp.fluid} alt={cover_image_alt} />
      ) : null}
      <h2>{title}</h2>
      <p>
        Published: {convertDate(date)}{" "}
        {last_modified !== date
          ? `(Modified: ${convertDate(last_modified)})`
          : null}
      </p>
      <p>{description}</p>
    </Container>
  );
};

export default Header;
