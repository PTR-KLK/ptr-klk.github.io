import React from "react";
import styled from "styled-components";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import catchLinks from "./catchLinks";

const Container = styled.section`
  width: 100%;
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
