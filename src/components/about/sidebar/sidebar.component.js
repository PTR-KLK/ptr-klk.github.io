import React from "react"
import { Nav, Hyperlink } from "./sidebar.style"

export default function Sidebar() {
  return (
    <Nav>
      <Hyperlink to="/about#contact" stripHash>
        Contact
      </Hyperlink>
      <Hyperlink to="/about#portfolio" stripHash>
        Portfolio
      </Hyperlink>
      <Hyperlink to="/about#tech" stripHash>
        Tech
      </Hyperlink>
      <Hyperlink to="/about#bio" stripHash>
        Bio
      </Hyperlink>
      <Hyperlink to="/about#hero" stripHash>
        Me
      </Hyperlink>
    </Nav>
  )
}
