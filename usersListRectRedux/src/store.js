import { createStore, combineReducers } from "redux";
import { usersReducer } from "./users/users.reducer";

const mainReducer = combineReducers({
  users: usersReducer,
});

const store = createStore(mainReducer);

export default store;
