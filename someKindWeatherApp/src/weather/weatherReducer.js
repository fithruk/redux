const initialState = {
  citiesArr: [],
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        citiesArr: action.payload,
      };
    default:
      return state;
  }
};

export { weatherReducer };
