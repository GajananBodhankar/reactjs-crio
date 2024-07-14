import createStore from "./store.ts";

function reducerCount(state = { count: 0 }, action) {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1 };
    case "Decrement":
      return { count: state.count - 1 };
  }
}

function handleMode(state = { isDarkMode: false }, action) {
  switch (action.type) {
    case "Mode":
      return { isDarkMode: !state.isDarkMode };
  }
}

function combineReducers(reducers) {
  let initialState = {};

  Object.keys(reducers).forEach((i) => (initialState[i] = undefined));

  function combine(state = initialState, action) {
    let newState = { ...state };
    Object.entries(reducers).forEach(([id, reducer]: any) => {
      newState[id] = reducer(newState[id], action);
    });

    return newState;
  }
  return combine;
}

let rootReducer = combineReducers({ counter: reducerCount, mode: handleMode });

let store = createStore(rootReducer);

export default store;
