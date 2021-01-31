import React from "react";
import MdWrapper from "../../mdWrapper/mdWrapper";
import { Container } from "./article.style";
import Header from "./header/header";

const Article = ({ data }) => {
  const { html, frontmatter } = data;

  return (
    <Container>
      <Header frontmatter={frontmatter} />
      <MdWrapper html={html} />
    </Container>
  );
};

export default Article;
