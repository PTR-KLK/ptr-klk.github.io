import styled from "@emotion/styled"
import Img from "gatsby-image"
import { rhythm } from "../../utils/typography"
import { colors, breakpoints } from "../../utils/theme"

export const Container = styled.header`
display: flex;
padding: ${rhythm(1)} ${rhythm(0.5)} ${rhythm(0.5)};
align-items: center;
margin: 0 auto;

@media (min-width: ${breakpoints.tablet}) {
  width: 75%;
  padding: ${rhythm(2)} ${rhythm(1)} ${rhythm(1)};
`

export const Paragraph = styled.p`
  width: 100%;
  padding: 0;
  margin: 0;
  text-align: justify;
`

export const Span = styled.span`
  font-weight: bold;

  & a {
    color: ${colors.accent};
    text-decoration: none;
  }
`

export const Picture = styled(Img)`
  display: none;
  
  @media (min-width: ${breakpoints.mobile}) {
    display: block;
    width: ${rhythm(4)};
    height: 100%;
    border-radius: 50%;
    margin: 0 ${rhythm(0.5)} 0 0;
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: ${rhythm(6)};
    height: 100%;
    margin: 0 ${rhythm(1)} 0 0;
  }
`
