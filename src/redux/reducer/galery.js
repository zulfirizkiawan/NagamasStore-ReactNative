const initGalery = {
  galery: [],
};

export const galeryReducer = (state = initGalery, action) => {
  if (action.type === 'SET_GALERY') {
    return {
      ...state,
      galery: action.value,
    };
  }

  return state;
};
