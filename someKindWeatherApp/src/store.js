import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { weatherReducer } from "./weather/weatherReducer";

const mainreducer = combineReducers({
  cities: weatherReducer,
});

const store = createStore(mainreducer, applyMiddleware(thunk));

export default store;
