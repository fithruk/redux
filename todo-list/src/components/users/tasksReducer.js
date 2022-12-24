const initialState = {
  tasksList: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TASKS_DATA":
      return {
        ...state,
        tasksList: action.payload,
      };
    default:
      return state;
  }
};

export { tasksReducer };
