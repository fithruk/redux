const usersReducer = (state = { userList: [] }, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        userList: state.userList.concat(action.payload),
      };
    case "DELETE_USER":
      return {
        ...state,
        userList: state.userList.filter((user) => user.id !== action.payload),
      };

    default:
      return state;
  }
};

export { usersReducer };
