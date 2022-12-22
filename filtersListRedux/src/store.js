import { combineReducers, createStore } from "redux";
import { userReducer } from "./users/usersReducer";

const mainReducer = combineReducers({
  users: userReducer,
});

const store = createStore(mainReducer);

export default store;
