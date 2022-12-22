import { users } from "./usersArr";

const initialState = { filterText: "", usersList: users };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TEXT":
      return {
        ...state,
        filterText: (state.filterText = action.payload),
      };
    default:
      return state;
  }
};

export { userReducer };
