import styled from "styled-components";

export const Container = styled.section`
  width: calc(100% - 1rem);
  max-width: 768px;
  margin: 0 auto;

  @media (min-width: 425px) {
    width: calc(100% - 2rem);
  }
`;
