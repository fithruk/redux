const initialState = { products: [] };

const cartReducer = (state = initialState, action) => {
  switch (action.value) {
    case "ADD_PRODUCT":
      return {
        ...state,
        cart: state.products.concat(action.payload),
      };
    case "REMOVE_PRODUCT":
      return {
        ...state,
        cart: state.products.filter((prod) => prod.id !== payload),
      };

    default:
      return state;
  }
};

export { cartReducer };
