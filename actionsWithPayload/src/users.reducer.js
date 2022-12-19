const initialState = { userList: [] };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        userList: state.userList.concat(action.payload),
      };
    case "REMOVE_USER":
      return {
        ...state,
        userList: state.userList.filter((user) => user.id !== action.payload),
      };

    default:
      return state;
  }
};

export { userReducer };
