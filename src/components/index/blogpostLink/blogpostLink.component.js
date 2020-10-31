import React from "react"
import { Header, Container, Image } from "./blogpostLink.style"

export default function BlogpostLink({ node }) {
  return (
    <Container>
      {node.cover_image ? (
        <Image
          fluid={node.cover_image.childImageSharp.fluid}
          objectFit="contain"
          alt=""
        />
      ) : null}
      <Header>
        <h3>{node.frontmatter.title}</h3>
        <p>{node.frontmatter.date}</p>
      </Header>
      <p>{node.frontmatter.description}</p>
    </Container>
  )
}
