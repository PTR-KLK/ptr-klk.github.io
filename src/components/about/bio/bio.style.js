import styled from "@emotion/styled"
import Img from "gatsby-image"
import { rhythm } from "../../../utils/typography"
import { breakpoints } from "../../../utils/theme"

export const Container = styled.section`
  width: 100%;
  max-width: 600px;
  padding: 0 ${rhythm(2)};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
  }
`

export const Paragraph = styled.p`
  width: 100%;
  padding: 0;
  margin: 0;
  text-align: justify;
  font-style: italic;
`

export const Picture = styled(Img)`
  width: 100%;
  max-width: ${rhythm(5)};
  height: auto;
  border-radius: 50%;
  margin: 0 0 ${rhythm(0.5)};

  @media (min-width: ${breakpoints.tablet}) {
    margin: 0 ${rhythm(1)} 0 0;
  }

  @media (min-width: ${breakpoints.laptop}) {
    max-width:: ${rhythm(7.5)};
  }
`
