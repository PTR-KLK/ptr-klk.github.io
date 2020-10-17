import styled from "@emotion/styled"
import { colors, breakpoints } from "../../../utils/theme"
import { rhythm } from "../../../utils/typography"

export const Ul = styled.ul`
  list-style: none;
  margin: 0;

  svg {
    height: ${rhythm(2.25)};
    width: ${rhythm(2.25)};
    color: ${colors.light};
    margin: ${rhythm(0.25)};
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: ${rhythm(1.5)};
    list-style: none;

    svg {
      height: ${rhythm(3)};
      width: ${rhythm(3)};
      margin: ${rhythm(0.5)} ${rhythm(1)};
    }
  }
`

export const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`
