import React, { Suspense } from "react";
import { Container, Fallback } from "./graphWrapper.style";

const Graph = React.lazy(() => fakeDelay(500)(import("./graph")));

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

  return (
    <Container height={height}>
      {!isSSR && (
        <Suspense fallback={<Fallback>Loading...</Fallback>}>
          <Graph data={data} />
        </Suspense>
      )}
    </Container>
  );
};

export default GraphWrapper;
