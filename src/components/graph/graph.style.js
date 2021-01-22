import styled from "styled-components";
import { reveal } from "./reveal/reveal";

export const Container = styled.figure`
  animation: ${reveal} 250ms linear forwards;
  opacity: 0;
  position: relative;
  margin: 0;
  width: 100%;
  height: auto;
`;

export const Button = styled.button`
  border: none;
  background: none;
  color: ${({ theme }) => theme.text};
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 0.5rem;

  svg {
    width: 1.75rem;
    height: 1.75rem;
  }

  @media (min-width: 425px) {
    margin: 1rem;

    svg {
      width: 1.825rem;
      height: 1.825rem;
    }
  }
`;
