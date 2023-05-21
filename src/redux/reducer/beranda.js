const initBeranda = {
  product: [],
  refresh: false,
};

export const berandaReducer = (state = initBeranda, action) => {
  if (action.type === 'SET_PRODUCT') {
    return {
      ...state,
      product: action.value,
    };
  }

  if (action.type === 'GO_KERANJANG') {
    return {
      ...state,
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
