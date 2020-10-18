import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Picture, Paragraph, Span } from "./header.style"

export default function Header() {
  const { ...data } = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "images/avatar.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 440) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        githubData {
          data {
            user {
              url
              name
              login
            }
          }
        }
      }
    `
  )

  const githubData = { ...data.githubData.data.user }

  return (
    <Container>
      <Picture
        fluid={data.file.childImageSharp.fluid}
        objectFit="cover"
        alt="Just me"
      />
      <Paragraph>
        <Span>
          {githubData.name}{" "}
          <a href={githubData.url} target="_blank" rel="noopener noreferrer">
            @{githubData.login}
          </a>
        </Span>
        <br />
        I'm writing about my adventures in development, computer hardware, and
        other ideas that spark in my mind.
      </Paragraph>
    </Container>
  )
}
