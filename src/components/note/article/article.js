import React from "react";
import MdxWrapper from "../../mdxWrapper/mdxWrapper";
import { Container } from "./article.style";
import Header from "./header/header";

const Article = ({ data }) => {
  const { body, frontmatter } = data;

  return (
    <Container>
      <Header frontmatter={frontmatter} />
      <MdxWrapper body={body} />
    </Container>
  );
};

export default Article;
