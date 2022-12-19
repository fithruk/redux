const addNewUser = (payload) => {
  return {
    type: "ADD_USER",
    payload,
  };
};

const removeUserById = (id) => {
  return {
    type: "REMOVE_USER",
    payload: id,
  };
};

export { addNewUser, removeUserById };
