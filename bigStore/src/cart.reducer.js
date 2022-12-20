const initialState = { cart: [] };

const cartReducer = (state = initialState, action) => {
  switch (action.value) {
    case "ADD_PRODUCT":
      return {
        ...state,
        cart: state.cart.concat(action.payload),
      };
    case "REMOVE_PRODUCT":
      return {
        ...state,
        cart: state.cart.filter((prod) => prod.id !== payload),
      };

    default:
      return state;
  }
};

export { cartReducer };
