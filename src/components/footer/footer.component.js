import React from "react"
import { Container, Section, Hyperlink, FooterHr } from "./footer.style"

export default function Footer({ absolute }) {
  return (
    <Container absolute={absolute}>
      <FooterHr absolute={absolute} />
      <Section>
        <span>
          Powered by{" "}
          <Hyperlink
            href={"https://www.gatsbyjs.org/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby{" "}
            <span role="img" aria-label="heart">
              ❤️
            </span>
          </Hyperlink>
        </span>
      </Section>
    </Container>
  )
}
