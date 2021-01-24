import { loadFromLocalStorage } from "./localStorage";

export const initialState = {
  graph: false,
  menuVisible: false,
  graphActive: false,
  authorVisible: loadFromLocalStorage(),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `TOGGLE_MENU_VISIBLE`: {
      return { ...state, menuVisible: !state.menuVisible };
    }
    case `TOGGLE_GRAPH_VISIBLE`: {
      return { ...state, graph: !state.graph };
    }
    case `TOGGLE_GRAPH_ACTIVE`: {
      return { ...state, graphActive: !state.graphActive };
    }
    case `TOGGLE_AUTHOR_VISIBLE`: {
      return { ...state, authorVisible: !state.authorVisible };
    }
    default:
      return state;
  }
};
