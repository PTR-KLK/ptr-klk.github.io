import styled from "@emotion/styled"
import { keyframes } from "@emotion/core"
import { Header } from "./hero/hero.style"
import { colors } from "../../utils/theme"
import { rhythm } from "../../utils/typography"

const reveal = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

export const Heading = styled.h1`
  text-align: center;
  align-self: center;
`

export const AnimatedHeading = styled(Heading)`
  position: absolute;
  font-size: ${rhythm(2)};
  line-height: ${rhythm(2)};
  padding: ${rhythm(0.25)};
  border: 4px solid ${colors.light};
`

export const AnimatedSubHeading = styled.h2`
  text-align: center;
  align-self: center;
  position: relative;
  top: ${rhythm(3)};
  font-size: ${rhythm(0.65)};
  line-height: ${rhythm(0.65)};
  opacity: 0;
  animation: ${reveal} 1s ease forwards;
  animation-delay: 2s;
`

export const Section1 = styled(Header)`
  height: 50vh;
  background: ${colors.secondary};

  h1:nth-of-type(1) {
    opacity: 0;
    animation: ${reveal} 1s ease forwards;
    animation-delay: 1.25s;
  }

  h1:nth-of-type(2) {
    animation: ${reveal} 1s ease forwards;
    animation-delay: 0.5s;
    animation-direction: reverse;
  }
`

export const Section2 = styled(Header)`
  height: 50vh;
  background: ${colors.primary};
`

export const Section3 = styled(Header)`
  height: 100vh;
  background: ${colors.secondary};
`

export const Section4 = styled(Header)`
  height: 100vh;
  background: ${colors.primary};
`
