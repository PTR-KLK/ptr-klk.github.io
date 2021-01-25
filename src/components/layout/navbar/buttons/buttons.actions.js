export const toggleGraphVisible = (graphVisible) => {
  return {
    type: `TOGGLE_GRAPH_VISIBLE`,
    payload: graphVisible,
  };
};

export const toggleMenuVisible = () => {
  return {
    type: `TOGGLE_MENU_VISIBLE`,
  };
};
