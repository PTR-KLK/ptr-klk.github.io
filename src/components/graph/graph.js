import React, { useState, useEffect } from "react";
import styled, { withTheme } from "styled-components";
import Graph from "react-graph-vis";
import { FaLock, FaLockOpen } from "react-icons/fa";
import navigation from "./components/navigation";
import createGraphData from "./components/createGraphData";
import options from "./components/options";
import { reveal } from "../reveal";

const Container = styled.figure`
  animation: ${reveal} 250ms linear forwards;
  opacity: 0;
  position: relative;
  margin: 0;
  width: 100%;
  height: auto;

  p {
    position: absolute;
    margin: 1rem;
    bottom: 0;
    left: 0;
  }
`;

const Button = styled.button`
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

const GraphComponent = withTheme(({ data, theme }) => {
  const [network, setNetwork] = useState({});
  const [graphActive, setGraphActive] = useState(false);
  const graphData = createGraphData(data);
  const events = {
    select: navigation(graphData),
  };

  useEffect(() => {
    const handleResize = () => {
      network.redraw();
      network.fit();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [network]);

  return (
    <Container>
      <Graph
        graph={graphData}
        options={options(graphActive, theme)}
        events={events}
        getNetwork={(network) => {
          setNetwork(network);
          network.on("hoverNode", function (params) {
            network.canvas.body.container.style.cursor = "pointer";

            network.on("blurNode", function (params) {
              network.canvas.body.container.style.cursor = "default";
            });
          });
        }}
      />
      <Button
        onClick={() => setGraphActive(!graphActive)}
        aria-label="Toggle graph lock/unlock"
        title="Toggle graph lock/unlock"
      >
        {!graphActive ? <FaLock /> : <FaLockOpen />}
      </Button>
    </Container>
  );
});

export default GraphComponent;
