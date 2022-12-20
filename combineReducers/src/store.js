import { createStore, combineReducers } from "redux";

import { usersReducer } from "./users.reducer";
import { counterReducer } from "./counter.reducer";

const mainReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
});

const store = createStore(mainReducer);

export default store;
