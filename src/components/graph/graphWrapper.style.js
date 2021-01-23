import styled from "styled-components";
import { reveal } from "./reveal/reveal";

export const Container = styled.section`
  height: calc(100vh - 3rem - 2px);
  justify-content: center;
  border: none;
  background: ${({ theme }) => theme.primary};
  display: flex;
  width: 100%;
  box-shadow: 0 2px ${(props) => props.theme.secondary};

  p {
    align-self: center;
    font-family: "Inconsolata", monospace;
    background-color: ${(props) => props.theme.primary};
  }

  canvas:focus,
  .vis-network:focus {
    outline: none;
  }

  @media (min-width: 425px) {
    height: calc(100vh - 4rem - 2px);
  }

  @media (min-width: 768px) {
    height: 50vh;
  }
`;

export const Fallback = styled.p`
  font-size: 1.5rem;
  animation: ${reveal} 125ms linear 125ms reverse forwards;
`;
