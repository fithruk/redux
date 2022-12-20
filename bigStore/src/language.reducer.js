const languageReducer = (state = "en", action) => {
  switch (action.value) {
    case "SET_LANGUAGE":
      return {
        ...state,
        language: action.payload,
      };

    default:
      return state;
  }
};

export { languageReducer };
