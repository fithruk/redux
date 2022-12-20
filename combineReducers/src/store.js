import { createStore, combineReducers } from "redux";

import { usersReducer } from "./users.reducer";
import { counterReducer } from "./counter.reducer";

const mainReducer = combineReducers({
  users: usersReducer,
  counter: counterReducer,
});

const store = createStore(mainReducer);

export default store;
