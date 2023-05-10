const initBeranda = {
  product: [],
};

export const berandaReducer = (state = initBeranda, action) => {
  if (action.type === 'SET_PRODUCT') {
    return {
      ...state,
      product: action.value,
    };
  }

  return state;
};
