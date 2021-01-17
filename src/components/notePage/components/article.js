import React from "react";
import styled from "styled-components";
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

  .gatsby-resp-image-wrapper {
    ${({ theme }) => sectionContainer(theme)};
    width: 100%;
    margin: 0 0 0.5rem;
  }
`;

const convertDate = (str) => {
  const date = new Date(str);
  return date.toLocaleDateString();
};

const Article = ({ data }) => {
  const {
    body,
    frontmatter: { title, date, last_modified, description },
  } = data;

  return (
    <Container>
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
