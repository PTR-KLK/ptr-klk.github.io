import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Container } from "./footer.style";

const Footer = () => {
  const {
    site: {
      siteMetadata: { author, year },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            year
          }
        }
      }
    `
  );

  return (
    <Container>
      <p>
        ©{author} {year}
      </p>
    </Container>
  );
};

export default Footer;
