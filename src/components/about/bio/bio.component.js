import React from "react"
import { Picture, Container, Paragraph } from "./bio.style"

export default function Bio({ data }) {
  const avatar = { ...data.file.childImageSharp.fluid }

  return (
    <Container>
      <Picture fluid={avatar} objectFit="cover" alt="Just me" />
      <Paragraph>
        "I want to create attractive and useful apps and webpages, so I became a
        front-end developer. Tailored applications and websites can make your
        daily life much convenient. I like using things that have a form that
        matches the content. I try to reflect it in my projects as well."
      </Paragraph>
    </Container>
  )
}
