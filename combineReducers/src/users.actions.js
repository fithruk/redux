const ADD_USER = "ADD/USER";
const DELETE_USER = "DELETE/USER";
const UPDATE_USER = "UPDATE/USER";

const addUser = (payload) => {
  return {
    type: ADD_USER,
    payload,
  };
};

const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};
const updateUser = (id, userData) => {
  return {
    type: UPDATE_USER,
    payload: {
      id,
      userData,
    },
  };
};

export { addUser, deleteUser, updateUser, ADD_USER, DELETE_USER, UPDATE_USER };
