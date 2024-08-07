function createStore(reducer) {
  let state = {};
  let subscribers: any = [];
  let dispatch = (action: any) => {
    state=reducer(state,action);
    subscribers.forEach((i: () => any) => i());
  };
  let getState = () => {
    return state;
  };
  let subscribe = (callback: any) => {
    subscribers.push(callback);
  };
  return { dispatch, getState, subscribe };
}

export default createStore;
