import React, { useState, Suspense } from "react";
import styled from "styled-components";
import { reveal } from "../reveal";

const Graph = React.lazy(() => fakeDelay(500)(import("./graph")));

const Container = styled.section`
  height: calc(100vh - 3rem - 2px);
  justify-content: center;
  border: none;
  background: ${({ theme }) => theme.primary};
  display: flex;
  width: 100%;

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

const Fallback = styled.p`
  font-size: 1.5rem;
  animation: ${reveal} 125ms linear 125ms reverse forwards;
`;

// https://stackoverflow.com/questions/54158994/react-suspense-lazy-delay

function fakeDelay(ms) {
  return (promise) =>
    promise.then(
      (data) =>
        new Promise((resolve) => {
          setTimeout(() => resolve(data), ms);
        })
    );
}

const GraphWrapper = ({ height, data }) => {
  const isSSR = typeof window === "undefined";
  const [graphActive, setGraphActive] = useState(false);

  return (
    <Container height={height} onClick={() => setGraphActive(!graphActive)}>
      {!isSSR && (
        <Suspense fallback={<Fallback>Loading...</Fallback>}>
          <Graph graphActive={graphActive} data={data} />
        </Suspense>
      )}
    </Container>
  );
};

export default GraphWrapper;
