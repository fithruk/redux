import { createStore } from "redux";

const increment = () => {
  return {
    type: "COUNTER/INCREMENT",
  };
};
const decrement = () => {
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

store.dispatch(decrement());

store.dispatch(increment());
