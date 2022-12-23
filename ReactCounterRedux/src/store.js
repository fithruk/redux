import { createStore, applyMiddleware } from "redux";
import { counterReducer } from "./counterReducer";

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
};

const store = createStore(counterReducer, applyMiddleware(logger));

export default store;
