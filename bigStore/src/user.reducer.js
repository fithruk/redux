const initialState = { user: null };

const userReducer = (state = null, action) => {
  switch (action.value) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
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
