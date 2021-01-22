import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import catchLinks from "./catchLinks/catchLinks";
import { Container } from "./mdxWrapper.style";

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
