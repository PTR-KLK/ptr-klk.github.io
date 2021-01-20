import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

const Container = styled.footer`
  justify-content: center;
  width: 100%;
  margin: 1rem 0 0;
  padding: 1rem 0;
  border-top: 2px solid ${(props) => props.theme.secondary};

  p {
    margin: 0;
    font-size: 1.25rem;
    text-align: center;
    font-family: "Inconsolata", monospace;
  }
`;

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
