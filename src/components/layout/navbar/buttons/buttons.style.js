import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex: 1;
  justify-content: flex-end;

  svg {
    width: 1.75rem;
    height: 1.75rem;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    margin: 0 0 0 1rem;
    padding: 0;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${(props) => props.theme.text};
  }

  button:hover {
    color: ${(props) => props.theme.accent};
  }

  @media (min-width: 768px) {
    order: 3;

    button {
      margin: 0 0.5rem;
    }
  }
`;
