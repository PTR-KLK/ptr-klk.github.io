import React from "react";
import { Container } from "./mdWrapper.style";

const MdContent = ({ children, html }) => {
  return (
    <Container>
      {children}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Container>
  );
};

export default MdContent;
