import styled from "@emotion/styled"
import { keyframes } from "@emotion/core"
import { colors, breakpoints } from "../../utils/theme"
import { rhythm } from "../../utils/typography"

const reveal = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

const flip = keyframes`
  0% { margin: 0 0 0 50%; }
  2.5% { margin: 0 0 0 0; }
  22.5% { margin: 0 0 0 0; }
  27.5% { margin: 0 0 0 -100%; }
  47.5% { margin: 0 0 0 -100%; }
  52.5% { margin: 0 0 0 -200%; }
  72.5% { margin: 0 0 0 -200%; }
  77.5% { margin: 0 0 0 -300%; }
  97.5% { margin: 0 0 0 -300%; }
  100% { margin: 0 0 0 -350%; }
`

export const Heading = styled.h1`
  align-baseline: center;
  text-align: center;
  align-self: center;
  font-size: ${rhythm(1)};
  padding: ${rhythm(0.75)};

  @media (min-width: ${breakpoints.tablet}) {
    font-size: ${rhythm(1.5)};
    padding: ${rhythm(1)};
  }
`

export const AnimatedHeading = styled.h1`
  text-align: center;
  align-self: center;
  position: absolute;
  font-size: ${rhythm(2)};
  line-height: ${rhythm(2)};
  padding: ${rhythm(0.25)};
  border: 5px solid ${colors.light};

  @media (min-width: ${breakpoints.tablet}) {
    font-size: ${rhythm(3)};
    line-height: ${rhythm(3)};
    padding: ${rhythm(0.5)};
  }
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

  @media (min-width: ${breakpoints.tablet}) {
    top: ${rhythm(4.5)};
    font-size: ${rhythm(1)};
    ine-height: ${rhythm(1)};
  }
`
const Section = styled.section`
  color: ${colors.light};
  display: flex;
  justify-content: center;

  & > * {
    margin: 0;
  }
`

export const Section1 = styled(Section)`
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

export const Section2 = styled(Section)`
  height: 50vh;
  background: ${colors.primary};
  display: flex;
  flex-direction: column;
`
//

export const AnimatedList = styled.div`
  font-size: ${rhythm(1)};
  text-align: center;
  font-weight: bold;
  overflow: hidden;
  position: relative;

  ul {
    animation: ${flip} 15s ease infinite forwards;
    list-style: none;
    position: relative;
    width: 400%;
    margin: 0 0 0 0;
    display: flex;

    li {
      width: 100%;
      margin: 0;
    }

    @media (min-width: ${breakpoints.tablet}) {
      animation: ${flip} 25s ease infinite forwards;
    }
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: ${rhythm(1.5)};
  }
`

export const Section3 = styled(Section)`
  height: 100vh;
  background: ${colors.secondary};
  flex-direction: column;

  p {
    width: 100%;
    max-width: ${breakpoints.mobile};
    margin: 0 auto;
    text-align: justify;
    font-size: ${rhythm(0.625)};
    padding: 0 ${rhythm(1.125)};

    @media (min-width: ${breakpoints.tablet}) {
      font-size: ${rhythm(0.75)};
    }
  }
`

export const Section4 = styled(Section)`
  height: 100vh;
  background: ${colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: ${rhythm(0.625)};

    @media (min-width: ${breakpoints.tablet}) {
      font-size: ${rhythm(0.75)};
    }
  }
`
