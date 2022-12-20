import { createStore, combineReducers } from "redux";
import { languageReducer } from "./language.reducer";
import { cartReducer } from "./cart.reducer";
import { userReducer } from "./user.reducer";

const mainReducer = combineReducers({
  language: languageReducer,
  user: userReducer,
  cart: cartReducer,
});

const store = createStore(mainReducer);

export default store;
