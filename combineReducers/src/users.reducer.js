const usersReducer = (state = { usersList: [] }, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        usersList: state.usersList.concat(action.payload),
      };
    case "DELETE_USER":
      return {
        ...state,
        usersList: state.usersList.filter((user) => user.id !== action.payload),
      };

    case "UPDATE_USER":
      return {
        ...state,
        usersList: state.usersList.map((user) => {
          if (user.id === action.payload.id) {
            return {
              ...user,
              ...action.payload.userData,
            };
          }
        }),
      };
    default:
      return state;
  }
};

export { usersReducer };
