import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { rhythm } from "../../utils/typography"
import { colors, breakpoints, pageWidth, Hr } from "../../utils/theme"

export const Container = styled.footer`
  color: ${props => (props.light ? colors.light : colors.dark)};
  ${props =>
    props.light
      ? css`
          position: absolute;
          left: 50%;
          transform: translate(-50%, 0);
          bottom: 0;
          text-shadow: 1px 1px 1px ${colors.darkTransparent};
        `
      : null}
  width: 100%;
  max-width: ${pageWidth};

  @media (min-width: ${breakpoints.tablet}) {
    margin: 0 auto;
    padding: 0 1rem;
  }
`

export const Section = styled.section`
  width: 100%;
  padding: ${rhythm(0.5)};
  text-align: center;

  & > * {
    display: block;
  }

  @media (min-width: ${breakpoints.tablet}) {
    padding: ${rhythm(1)};
  }
`

export const Hyperlink = styled.a`
  color: inherit;
  text-decoration: none;

  &:visited {
    color: inherit;
  }

  &:hover {
    color: ${colors.accent};
  }
`

export const FooterHr = styled(Hr)`
  border-bottom: ${props =>
    props.light ? `1px solid ${colors.light}` : `1px solid ${colors.dark}`};
`
