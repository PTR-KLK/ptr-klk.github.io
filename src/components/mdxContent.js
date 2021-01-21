import React from "react";
import styled from "styled-components";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import catchLinks from "./catchLinks";

const Container = styled.section`
  width: calc(100% - 1rem);
  max-width: 768px;
  margin: 0 auto;

  @media (min-width: 425px) {
    width: calc(100% - 2rem);
  }
`;

const MdxContent = ({ children, body }) => {
  return (
    <Container>
      {children}
      <MDXProvider components={catchLinks}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </Container>
  );
};

export default MdxContent;
