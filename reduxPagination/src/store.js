import { createStore } from "redux";
import { paginationReducer } from "./users/usersReduser";

const store = createStore(
  paginationReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
