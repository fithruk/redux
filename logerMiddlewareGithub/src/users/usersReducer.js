const initialState = {
  userData: null,
  isFetching: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_SPINNER":
      return {
        ...state,
        isFetching: !state.isFetching ? true : false,
      };
    case "SET_USER":
      return {
        ...state,
        userData: (state.userData = action.payload),
      };
    default:
      return state;
  }
};

export { usersReducer };
