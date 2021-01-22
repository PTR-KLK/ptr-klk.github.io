import styled from "styled-components";
import { darken } from "polished";
import { boxShadow } from "../../boxShadow/boxShadow";

export const Container = styled.article`
  width: 100%;
  height: 100%;
  flex: 1;

  h2 {
    margin: 1.25rem 0;
  }

  .gatsby-image-wrapper,
  .gatsby-resp-image-wrapper {
    ${({ theme }) => boxShadow(theme)};
    width: 100%;
    margin: 1rem 0 0.5rem;
  }

  blockquote {
    ${({ theme }) => boxShadow(theme)};
    margin: 1rem 0;
    border-left: 10px solid ${(props) => darken(0.15, props.theme.primary)};
    background: ${(props) => props.theme.primary};
    padding: 1rem;

    p:first-of-type {
      margin-top: 0;
    }

    p:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export const Info = styled.section`
  border-bottom: 2px solid ${({ theme }) => theme.secondary};
  width: calc(100% - 1rem);
  max-width: 768px;
  margin: 0 auto;

  @media (min-width: 425px) {
    width: calc(100% - 2rem);
  }
`;
