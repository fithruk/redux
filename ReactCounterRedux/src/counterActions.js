const INCREMENT = "COUNTER/INCREMENT";
const DECREMENT = "COUNTER/DECREMENT";
const RESET = "COUNTER/RESET";

const increment = () => {
  return {
    type: INCREMENT,
  };
};

const decrement = () => {
  return {
    type: DECREMENT,
  };
};

const reset = () => {
  return {
    type: RESET,
  };
};

export { INCREMENT, DECREMENT, RESET, increment, decrement, reset };
