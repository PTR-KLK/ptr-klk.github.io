export const saveToLocalStorage = (state) => {
  try {
    const authorVisible = JSON.stringify(state.authorVisible);
    localStorage.setItem("authorVisible", authorVisible);
  } catch (e) {
    console.warn(e);
  }
};

export const loadFromLocalStorage = () => {
  try {
    const authorVisible = localStorage.getItem("authorVisible");
    if (authorVisible === null) return true;
    return JSON.parse(authorVisible);
  } catch (e) {
    return true;
  }
};
