import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { tasksReducer } from "./components/users/tasksReducer";

const mainReducer = combineReducers({
  tasks: tasksReducer,
});

const store = createStore(mainReducer, applyMiddleware(thunk));

export default store;
