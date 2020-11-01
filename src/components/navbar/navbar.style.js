import styled from "@emotion/styled"
import { ThreeBarsIcon } from "@primer/octicons-react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { colors, breakpoints, pageWidth } from "../../utils/theme"
import { rhythm } from "../../utils/typography"

export const Nav = styled.nav`
  ${props =>
    props.fixed
      ? css`
          position: fixed;
          z-index: 4;
          top: 0;
          color: ${colors.light};
          text-shadow: 1px 1px 1px ${colors.darkTransparent};
          background: none;

          @media (min-width: ${breakpoints.tablet}) {
            left: 50%;
            transform: translateX(-50%);
          }
        `
      : css`
          position: static;
          color: ${colors.dark};
          margin: 0 auto;
        `};
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  width: 100%;
  max-width: ${pageWidth};
  padding: ${rhythm(0.125)} ${rhythm(0.5)} ${rhythm(0.125)};

  @media (min-width: ${breakpoints.tablet}) {
    padding: ${rhythm(0.125)} ${rhythm(1)} ${rhythm(0.125)};
  }
`

export const Hyperlink = styled(Link)`
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

export const HomeHyperlink = styled(Hyperlink)`
  display: flex;
  align-items: center;
`

export const PageLogo = styled.p`
  font-weight: bold;
  font-size: ${rhythm(0.6)};
  line-height: ${rhythm(0.6)};
  padding: ${rhythm(0.1)};
  margin: 0;
  color: ${props => (props.fixed ? colors.light : colors.dark)};
  border: 2px solid ${props => (props.fixed ? colors.light : colors.dark)};

  &:hover {
    color: ${colors.accent};
    border: 2px solid ${colors.accent};
  }

  @media (min-width: ${breakpoints.tablet}) {
    margin: 0 ${rhythm(0.25)} 0 0;
  }
`

export const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  color: ${props => (props.fixed ? colors.light : colors.dark)};
  display: flex;
  align-items: center;

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const Section = styled.section`
  display: ${props => (props.menuVisible ? "flex" : "none")};
  flex-flow: column;
  position: absolute;
  background: ${props => (props.fixed ? colors.darkTransparent : colors.light)};
  top: ${rhythm(1.75)};
  left: 0;
  text-align: center;
  z-index: 4;
  width: 100%;

  & > *:first-of-type {
    border-top: 1px solid ${colors.accent};
  }

  & > * {
    padding: ${rhythm(0.5)};
    border-bottom: 1px solid ${colors.accent};
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: flex;
    flex-flow: row;
    position: static;
    background: none;
    width: auto;

    & > *:first-of-type {
      border-top: none;
    }

    & > * {
      padding: 0 0 0 ${rhythm(0.25)};
      border-bottom: none;
    }
  }
`
export const Icon = styled(ThreeBarsIcon)`
  width: ${rhythm(1.25)};
  height: ${rhythm(1.25)};

  @media (min-width: ${breakpoints.tablet}) {
    & > * {
      display: none;
    }
  }
`
