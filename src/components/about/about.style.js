import styled from "@emotion/styled"
import { colors, breakpoints, pageWidth } from "../../utils/theme"
import { rhythm } from "../../utils/typography"
import BackgroundImage from "gatsby-background-image"

export const Heading = styled.h2`
  font-size: ${rhythm(1)};
  padding-bottom: ${rhythm(0.75)};
  text-align: center;
  margin-bottom: ${rhythm(0.75)};
  padding: 0;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: ${rhythm(1.5)};
    margin-bottom: ${rhythm(1.5)};
  }
`

const Figure = styled(BackgroundImage)`
  color: ${colors.light};
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  margin: 0;

  & figcaption {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: ${rhythm(1.5)} 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & figcaption:after {
    content: '';
    width 100%;
    height: 100%;
    max-width: ${pageWidth};
    position: absolute;
    z-index: -1;
  }

  @media (min-width: ${breakpoints.tablet}) {
    & figcaption {
      padding: ${rhythm(3)} 0;
    }
  }
`

export const Hero = styled(Figure)`
  height: 100vh;

  & figcaption {
    background: ${colors.primaryTransparent};
  }

  @media (min-width: ${breakpoints.tablet}) {
    height: 50vh;
  }
`

export const Biography = styled(Figure)`
  height: 100vh;

  & figcaption {
    background: ${colors.secondaryTransparent};
  }

  & figcaption:after {
    background: ${colors.secondaryTransparent};
  }

  @media (min-width: ${breakpoints.tablet}) {
    height: 50vh;
  }
`

export const Tech = styled(Figure)`
  & figcaption {
    background: ${colors.primaryTransparent};
  }

  & figcaption:after {
    background: ${colors.primaryTransparent};
  }
`

export const Portfolio = styled(Figure)`
  & figcaption {
    background: ${colors.secondaryTransparent};
  }

  & figcaption:after {
    background: ${colors.secondaryTransparent};
  }
`

export const Contact = styled(Figure)`
  & figcaption {
    background: ${colors.primaryTransparent};
  }

  & figcaption:after {
    background: ${colors.primaryTransparent};
  }
`
