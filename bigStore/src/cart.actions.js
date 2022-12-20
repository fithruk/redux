const addProduct = (payload) => {
  return {
    type: "ADD_PRODUCT",
    payload,
  };
};

const removeProduct = (id) => {
  return {
    type: "REMOVE_PRODUCT",
    payload: id,
  };
};

export { addProduct, removeProduct };
