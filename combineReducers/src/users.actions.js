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
const updateUser = (id, userData) => {
  return {
    type: "UPDATE_USER",
    payload: {
      id,
      userData,
    },
  };
};

export { addUser, deleteUser, updateUser };
