import styled from "@emotion/styled"
import { colors, breakpoints, reveal } from "../../../utils/theme"
import { rhythm } from "../../../utils/typography"

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${rhythm(5)};
  margin-bottom: ${rhythm(0.8)};

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

  @media (min-width: ${breakpoints.tablet}) {
    height: ${rhythm(7.5)};
    margin-bottom: ${rhythm(1.2)};
  }
`

export const AnimatedHeading = styled.h1`
  position: absolute;
  text-align: center;
  font-size: ${rhythm(2)};
  line-height: ${rhythm(2)};
  padding: ${rhythm(0.25)};
  margin: 0;
  border: ${rhythm(0.25)} solid ${colors.light};

  @media (min-width: ${breakpoints.tablet}) {
    font-size: ${rhythm(3)};
    line-height: ${rhythm(3)};
    padding: ${rhythm(0.5)};
  }
`

export const AnimatedSubHeading = styled.h2`
  text-align: center;
  position: relative;
  top: ${rhythm(3)};
  margin: 0;
  font-size: ${rhythm(0.7)};
  line-height: ${rhythm(0.7)};
  opacity: 0;
  animation: ${reveal} 1s ease forwards;
  animation-delay: 2s;

  @media (min-width: ${breakpoints.tablet}) {
    top: ${rhythm(4.5)};
    font-size: ${rhythm(1)};
    line-height: ${rhythm(1)};
  }
`
