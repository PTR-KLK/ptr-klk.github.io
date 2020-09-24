import styled from "@emotion/styled"
import { keyframes } from "@emotion/core"
import { colors, breakpoints } from "../../utils/theme"
import { rhythm } from "../../utils/typography"
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
  padding-bottom: ${rhythm(0.75)};

  @media (min-width: ${breakpoints.tablet}) {
    font-size: ${rhythm(1.5)};
    padding-bottom: ${rhythm(1)};
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
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    width: 100%;
    height 100%; 
  }

  & > * {
    margin: 0;
  }
`

export const Section1 = styled(Section)`
  height: 75vh;
  background: ${colors.secondaryTransparent};

  &:before {
    background: repeating-conic-gradient(
      from 10deg at 41.125% 41.125%,
      ${colors.dark} 5deg 15deg,
      ${colors.light} 15deg 25deg);
    );
  }
  
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
  height: 25vh;
  background: ${colors.primaryTransparent};
  display: flex;
  flex-direction: column;

  &:before {
    background-image: repeating-linear-gradient(
      -45deg,
      ${colors.light} 0 10px,
      ${colors.dark} 10px 20px
    );
  }
`

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
      display: flex;
      justify-content: center;
      align-items: center;
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
const iconStyle = `
  height: ${rhythm(1.5)};
  width: ${rhythm(1.5)};
  color: ${colors.light};
  margin: 0 ${rhythm(0.25)};

  @media (min-width: ${breakpoints.tablet}) {
    height: ${rhythm(2.5)};
    width: ${rhythm(2.5)};
    margin: 0 ${rhythm(0.5)};
  }
`
export const HtmlIcon = styled(Html5)`
  ${iconStyle}
`
export const CssIcon = styled(Css3)`
  ${iconStyle}
`
export const ReactIcon = styled(ReactJs)`
  ${iconStyle}
`
export const ReduxIcon = styled(Redux)`
  ${iconStyle}
`
export const GitIcon = styled(Git)`
  ${iconStyle}
`
export const GatsbyIcon = styled(Gatsby)`
  ${iconStyle}
`
export const JsIcon = styled(Javascript)`
  ${iconStyle}
`
export const NpmIcon = styled(Npm)`
  ${iconStyle}
`
export const GraphqlIcon = styled(Graphql)`
  ${iconStyle}
`
export const StyledIcon = styled(StyledComponents)`
  ${iconStyle}
`
export const VsIcon = styled(Visualstudiocode)`
  ${iconStyle}
`
export const LinuxIcon = styled(Linux)`
  ${iconStyle}
`

export const Section3 = styled(Section)`
  height: 100vh;
  background: ${colors.secondaryTransparent};
  flex-direction: column;

  &:before {
    background: repeating-radial-gradient(
      circle at 25% 25%,
      ${colors.dark},
      ${colors.dark} 15px,
      ${colors.light} 15px,
      ${colors.light} 30px
    );
  }

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
  background: ${colors.primaryTransparent};
  display: flex;
  flex-direction: column;
  align-items: center;

  &:before {
    background-image: repeating-linear-gradient(
      45deg,
      ${colors.light} 0 10px,
      ${colors.dark} 10px 20px
    );
  }

  p {
    font-size: ${rhythm(0.625)};

    @media (min-width: ${breakpoints.tablet}) {
      font-size: ${rhythm(0.75)};
    }
  }
`

export const ExternalLink = styled.a`
  font-size: ${rhythm(0.75)};
  text-decoration: none;
  display: flex;
  align-items: center;
  color: inherit;

  &:hover {
    color: ${colors.accent};

    svg {
      color: ${colors.accent};
    }
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: ${rhythm(1.25)};
  }
`