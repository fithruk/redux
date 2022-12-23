import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { usersReducer } from "./users/usersReducer";

const mainReducer = combineReducers({
  users: usersReducer,
});

const logger = (state) => (next) => (action) => {
  console.group(action.type);
  console.info("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
};

const middwares = [thunk, logger];

const store = createStore(mainReducer, compose(applyMiddleware(...middwares)));

export default store;
