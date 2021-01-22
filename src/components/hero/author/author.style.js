import styled from "styled-components";
import { rgba } from "polished";
import Img from "gatsby-image";
import { boxShadow } from "../../boxShadow/boxShadow";

export const Container = styled.section`
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  background: ${({ theme }) => rgba(theme.primary, 0.9)};
  width: 100%;
  height: 100%;

  p {
    margin: 0.5rem 0;
  }
`;

export const Image = styled(Img)`
  ${({ theme }) => boxShadow(theme)};
  width: 100%;
  max-width: 128px;
  margin: 0 auto 0.5rem;
  height: auto;

  @media (min-width: 360px) {
    max-width: 160px;
    margin: 0 auto 1rem;
  }

  @media (min-width: 484px) {
    max-width: 192px;
    margin: 0 calc(1rem + 2px) calc(0.5rem + 2px) 0;
    float: left;
  }

  @media (min-width: 768px) {
    max-width: 228px;
  }
`;

export const Heading = styled.h2`
  font-size: 2rem;
  margin: 0 0 0.5rem;
  color: ${({ theme }) => theme.secondary};

  @media (min-width: 360px) {
    font-size: 3rem;
    line-height: 2rem;
    margin: 0 0 1rem;
  }
`;
