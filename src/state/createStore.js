import { createStore, compose } from "redux";

const initialState = {
  graph: false,
  menuVisible: false,
  graphActive: false,
  authorVisible: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `TOGGLE_GRAPH`: {
      return Object.assign({}, state, {
        graph: !state.graph,
      });
    }
    case `TOGGLE_MENU_VISIBLE`: {
      return Object.assign({}, state, {
        menuVisible: !state.menuVisible,
      });
    }
    case `TOGGLE_GRAPH_ACTIVE`: {
      return Object.assign({}, state, {
        graphActive: !state.graphActive,
      });
    }
    case `TOGGLE_AUTHOR_VISIBLE`: {
      return Object.assign({}, state, {
        authorVisible: !state.authorVisible,
      });
    }
    default:
      return state;
  }
};

const initStore = () => {
  const windowGlobal = typeof window !== "undefined" && window;

  const devtools =
    process.env.NODE_ENV === "development" && windowGlobal.devToolsExtension
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f;

  const store = createStore(reducer, initialState, compose(devtools));

  return store;
};

export default initStore;
