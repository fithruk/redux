import { users } from "./users";

const initialState = {
  users: {
    usersList: users,
    currentPage: 0,
  },
};

const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEXT_PAGE":
      return {
        ...state,
        currentPage: (state.users.currentPage = state.users.currentPage + 1),
      };
    case "PREV_PAGE":
      return {
        ...state,
        currentPage: (state.users.currentPage = state.users.currentPage - 1),
      };
    default:
      return state;
  }
};

export { paginationReducer };
