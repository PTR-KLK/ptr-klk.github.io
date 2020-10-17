import React from "react"
import { Header, AnimatedHeading, AnimatedSubHeading } from "./hero.style"

export default function Hero() {
  return (
    <Header>
      <AnimatedHeading>
        PIOTR
        <br />
        KIELAK
      </AnimatedHeading>
      <AnimatedHeading>
        PTR
        <br />
        KLK
      </AnimatedHeading>
      <AnimatedSubHeading>FRONTEND DEVELOPER</AnimatedSubHeading>
    </Header>
  )
}
