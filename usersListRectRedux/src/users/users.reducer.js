const usersReducer = (state = { usersList: [] }, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        usersList: state.usersList.concat(action.payload),
      };
    case "REMOVE_USER":
      return {
        ...state,
        usersList: state.usersList.filter((user) => user.id !== action.payload),
      };

    default:
      return state;
  }
};

export { usersReducer };
