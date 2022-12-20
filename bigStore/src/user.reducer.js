const initialState = { user: null };

const userReducer = (state = initialState, action) => {
  switch (action.value) {
    case "SET_USER":
      return {
        ...state,
        user: state.user.concat(action.payload),
      };
    case "REMOVE_USER":
      return {
        ...state,
        cart: null,
      };

    default:
      return state;
  }
};

export { userReducer };
