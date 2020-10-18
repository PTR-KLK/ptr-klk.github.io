import React from "react"
import { Container, ExternalLink } from "./social.style"

export default function Social() {
  return (
      <Container>
        <ExternalLink
          href="https://dev.to/ptrklk"
          target="_blank"
          rel="noopener noreferrer"
        >
          dev.to Profile
        </ExternalLink>
        <ExternalLink
          href="https://www.linkedin.com/in/piotr-kielak/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn Profile
        </ExternalLink>
      </Container>
  )
}
