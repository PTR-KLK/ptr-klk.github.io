import styled from "@emotion/styled"
import { colors } from "../../../utils/theme"

export const Header = styled.header`
  color: ${colors.light};
  display: flex;
  justify-content: center;
`

export const Section = styled.section`
  display: flex;
  justify-content: center;

  & > * {
    margin: 0;
  }
`
