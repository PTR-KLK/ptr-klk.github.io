import styled from "styled-components";

export const Container = styled.footer`
  justify-content: center;
  width: 100%;
  padding: 1rem 0;
  margin: 1rem 0 0;
  box-shadow: 0 -2px ${(props) => props.theme.secondary};

  p {
    margin: 0;
    font-size: 1.25rem;
    text-align: center;
    font-family: "Inconsolata", monospace;
  }
`;
