import React, { useState, useEffect } from "react";
import { withTheme } from "styled-components";
import Graph from "react-graph-vis";
import { FaLock, FaLockOpen } from "react-icons/fa";
import navigation from "./navigation/navigation";
import createGraphData from "./createGraphData/createGraphData";
import options from "./options/options";
import { Container, Button } from "./graph.style";

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
