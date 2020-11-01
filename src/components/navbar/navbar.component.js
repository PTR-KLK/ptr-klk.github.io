import React, { useState } from "react"
import {
  Nav,
  Hyperlink,
  HomeHyperlink,
  PageLogo,
  Button,
  Section,
  Icon,
} from "./navbar.style"

export default function Navbar({ fixed }) {
  const [menuVisible, setMenuVisible] = useState(false)

  const Menu = () => {
    return (
      <Section fixed={fixed} menuVisible={menuVisible}>
        <Hyperlink to={`/`}>
          Blog
        </Hyperlink>{" "}
        <Hyperlink to={`/about/`}>
          About
        </Hyperlink>
      </Section>
    )
  }

  return (
    <Nav fixed={fixed}>
      <HomeHyperlink to={`/`}>
        <PageLogo fixed={fixed}>
          PTR<br/>KLK
        </PageLogo>
      </HomeHyperlink>
      <Button fixed={fixed} onClick={() => setMenuVisible(!menuVisible)}>
        <Icon />
      </Button>
      <Menu />
    </Nav>
  )
}
