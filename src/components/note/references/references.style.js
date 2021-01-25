import styled from "styled-components";
import { boxShadow } from "../../boxShadow/boxShadow";

export const Container = styled.section`
  width: calc(100% - 2rem);
  max-width: 768px;
  background: ${({ theme }) => theme.primary};
  ${({ theme }) => boxShadow(theme)};
  margin: 1rem 0 0;
  padding: 0 0.5rem;

  ul {
    margin: 1rem 0;
  }

  @media (min-width: 425px) {
    padding: 0 1rem;
    width: calc(100% - 4rem);
  }
`;
