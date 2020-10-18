import styled from "@emotion/styled"
import { colors } from "../../utils/theme"
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
