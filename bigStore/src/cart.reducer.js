const initialState = { products: [] };

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        products: state.products.concat(action.payload),
      };
    case "REMOVE_PRODUCT":
      return {
        ...state,
        products: state.products.filter((prod) => prod.id !== action.payload),
      };

    default:
      return state;
  }
};

export { cartReducer };
