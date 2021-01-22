import styled from "styled-components";
import { Link } from "gatsby";

export const Container = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: calc(100% - 1rem);
  border-bottom: 2px solid ${(props) => props.theme.secondary};
  padding: 0.5rem;

  @media (min-width: 425px) {
    width: calc(100% - 2rem);
    padding: 1rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Title = styled(Link)`
  font-family: "Inconsolata", monospace;
  text-decoration: none;
  color: ${(props) => props.theme.text};
  width: 112px;

  &:visited {
    color: ${(props) => props.theme.text};
  }

  &:hover {
    color: ${(props) => props.theme.accent};
  }

  p {
    margin: 0;
  }

  h1 {
    font-weight: normal;
    margin: 0;
    font-size: 2rem;
  }

  @media (min-width: 768px) {
    width: 128px;

    h1 {
      margin: 0 0.5rem;
    }
  }
`;
