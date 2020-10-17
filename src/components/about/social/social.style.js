import styled from "@emotion/styled"
import { colors, breakpoints } from "../../../utils/theme"
import { rhythm } from "../../../utils/typography"

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 ${rhythm(1.5)};

  p {
    font-size: ${rhythm(0.625)};
  }

  @media (min-width: ${breakpoints.tablet}) {
    margin: 0 0 ${rhythm(3)};

    p {
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
