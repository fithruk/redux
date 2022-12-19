const addUser = (payload) => {
  return {
    type: "ADD_USER",
    payload,
  };
};

const deleteUser = (id) => {
  return {
    type: "DELETE_USER",
    payload: id,
  };
};

export { addUser, deleteUser };
