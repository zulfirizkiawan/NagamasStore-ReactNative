const initCart = {
  cart: [],
  co_cart: [],
  delete_cart: [],
  refresh: false,
};

export const cartReducer = (state = initCart, action) => {
  if (action.type === 'SET_CART') {
    return {
      ...state,
      cart: action.value,
    };
  }

  if (action.type === 'ADD_TO_CART') {
    return {
      ...state,
      co_cart: action.value,
      refresh: true,
    };
  }

  if (action.type === 'REMOVE_FROM_CART') {
    return {
      ...state,
      delete_cart: action.value,
      refresh: true,
    };
  }
  if (action.type === 'REFRESH_CART') {
    return {
      ...state,
      refresh: false,
    };
  }

  return state;
};
