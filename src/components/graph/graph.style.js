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
