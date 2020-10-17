import React from "react"
import {
  Html5,
  Css3,
  Javascript,
  ReactJs,
  Redux,
  Gatsby,
  Npm,
  Git,
  Graphql,
  StyledComponents,
  Visualstudiocode,
  Linux,
} from "@icons-pack/react-simple-icons"
import { Ul, Li } from "./technology.style"

export default function Technology() {
  return (
    <Ul>
      <Li>
        <Html5 title="Html5" />
        <Css3 title="Css3" />
        <Javascript title="Javascript" />
      </Li>
      <Li>
        <ReactJs title="React" />
        <Redux title="Redux" />
        <Gatsby title="Gatsby" />
      </Li>
      <Li>
        <Npm title="GraphQl" />
        <Git title="Npm" />
        <Graphql title="Git" />
      </Li>
      <Li>
        <StyledComponents title="StyledComponents" />
        <Visualstudiocode title="VSCode" />
        <Linux title="GNU/Linux" />
      </Li>
    </Ul>
  )
}
