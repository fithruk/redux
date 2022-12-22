const toggleOption = (id) => {
  return {
    type: "TOGGLE_OPTION",
    payload: id,
  };
};

export { toggleOption };
