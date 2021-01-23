import styled from "styled-components";

export const Container = styled.button`
  border: none;
  background: none;
  color: ${({ theme }) => theme.text};
  position: absolute;
  left: 0;
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
