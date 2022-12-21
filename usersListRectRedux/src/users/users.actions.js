const addUser = (payload) => {
  return {
    type: "ADD_USER",
    payload,
  };
};

const removeUser = (payload) => {
  return {
    type: "REMOVE_USER",
    payload,
  };
};

export { addUser, removeUser };
