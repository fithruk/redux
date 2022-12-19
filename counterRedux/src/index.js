import { createStore } from "redux";

const INCREMENT = () => {
  return {
    type: "COUNTER/INCREMENT",
  };
};
const DECREMENT = () => {
  return {
    type: "COUNTER/DECREMENT",
  };
};

const initialState = 0;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "COUNTER/INCREMENT":
      return state + 1;
    case "COUNTER/DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(counterReducer);
