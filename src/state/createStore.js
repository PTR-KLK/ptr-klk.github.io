import { createStore, compose } from "redux";
import { initialState, reducer } from "./reducer";
import { saveToLocalStorage } from "./localStorage";

const initStore = () => {
  const windowGlobal = typeof window !== "undefined" && window;

  const devtools =
    process.env.NODE_ENV === "development" && windowGlobal.devToolsExtension
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f;

  const store = createStore(reducer, initialState, compose(devtools));

  store.subscribe(() => saveToLocalStorage(store.getState()));

  return store;
};

export default initStore;
