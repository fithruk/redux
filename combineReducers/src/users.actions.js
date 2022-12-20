const addUser = (payload) => {
  return {
    type: "ADD/USER",
    payload,
  };
};

const deleteUser = (id) => {
  return {
    type: "DELETE/USER",
    payload: id,
  };
};
const updateUser = (id, userData) => {
  return {
    type: "UPDATE/USER",
    payload: {
      id,
      userData,
    },
  };
};

export { addUser, deleteUser, updateUser };
