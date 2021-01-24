import styled from "styled-components";

export const Container = styled.section`
  position: absolute;
  top: calc(3rem + 3px);
  right: 0;
  display: ${({ visible }) => (visible ? "flex" : "none")};
  background: ${(props) => props.theme.body};
  box-shadow: -2px 0 ${(props) => props.theme.secondary};
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 3rem - 2px);

  p {
    font-size: 1.125rem;
    margin: 1rem 0 0;
  }

  a {
    font-family: "Inconsolata", monospace;
    text-decoration: none;
    color: ${(props) => props.theme.text};
    padding: 0 2rem;
  }

  a:visited {
    color: ${(props) => props.theme.text};
  }

  a:hover,
  button:hover {
    color: ${(props) => props.theme.accent};
  }

  @media (min-width: 425px) {
    top: calc(4rem + 3px);
    height: calc(100vh - 4rem - 4px);
  }

  @media (min-width: 768px) {
    position: relative;
    right: unset;
    top: unset;
    height: unset;
    box-shadow: none;
    display: flex;
    flex-direction: row;
    order: 2;
    margin: 0;

    p {
      margin: 0.25rem 0.5rem;
    }

    a {
      padding: 0;
    }

    a:first-of-type {
      margin: 0;
    }
  }
`;
