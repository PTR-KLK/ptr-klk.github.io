import styled from "@emotion/styled"
import { colors } from "../../utils/theme"
import { rhythm } from "../../utils/typography"
import AniLink from "gatsby-plugin-transition-link/AniLink"


export const Hyperlink = styled(AniLink)`
  color: inherit;
  text-decoration: none;

  &:visited {
    color: inherit;
  }

  &:hover {
    color: ${colors.accent};

    h3,
    p {
      color: ${colors.accent};
    }
  }
`

export const Heading = styled.h1`
  padding: ${rhythm(0.5)} ${rhythm(0.5)} 0;
  margin: 0;
  align-self: center;
  text-align: center;
`
