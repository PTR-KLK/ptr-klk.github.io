import styled from "styled-components";

export const Container = styled.footer`
  justify-content: center;
  width: 100%;
  padding: 1rem 0;
  border-top: 2px solid ${(props) => props.theme.secondary};

  p {
    margin: 0;
    font-size: 1.25rem;
    text-align: center;
    font-family: "Inconsolata", monospace;
  }

  @media (min-width: 768px) {
    margin: 1rem 0 0;
  }
`;
