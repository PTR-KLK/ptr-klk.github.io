import React from "react"
import { Nav, Hyperlink } from "./sidebar.style"

export default function Sidebar() {
  return (
    <Nav>
      <Hyperlink to="/about#section4" stripHash>
        Contact
      </Hyperlink>
      <Hyperlink to="/about#section3" stripHash>
        Bio
      </Hyperlink>
      <Hyperlink to="/about#section2" stripHash>
        Tech
      </Hyperlink>
      <Hyperlink to="/about#section1" stripHash>
        Me
      </Hyperlink>
    </Nav>
  )
}
