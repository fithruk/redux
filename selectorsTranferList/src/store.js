import { combineReducers, createStore } from "redux";
import { optionsReducer } from "./options/optionsReducer";

const mainStore = combineReducers({
  options: optionsReducer,
});

const store = createStore(mainStore);

export default store;
