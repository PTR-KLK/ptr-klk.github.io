import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withTheme } from "styled-components";
import Graph from "react-graph-vis";
import navigation from "./navigation/navigation";
import createGraphData from "./createGraphData/createGraphData";
import options from "./options/options";
import { Container } from "./graph.style";
import LockButton from "./lockButton/lockButton";

const mapStateToProps = ({ graphActive }) => {
  return { graphActive };
};

const cursorStyle = (network) => {
  network.on("hoverNode", function () {
    network.canvas.body.container.style.cursor = "pointer";

    network.on("blurNode", function () {
      network.canvas.body.container.style.cursor = "default";
    });
  });
};

const GraphComponent = withTheme(({ data, theme, graphActive }) => {
  const [network, setNetwork] = useState({});
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
          cursorStyle(network);
        }}
      />
      <LockButton />
    </Container>
  );
});

export default connect(mapStateToProps, null)(GraphComponent);
