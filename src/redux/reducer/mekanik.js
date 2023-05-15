const initMekanik = {
  mekanik: [],
  co_mekanik: [],
};

export const mekanikReducer = (state = initMekanik, action) => {
  if (action.type === 'SET_MEKANIK') {
    return {
      ...state,
      mekanik: action.value,
    };
  }

  if (action.type === 'CO_MEKANIK') {
    return {
      ...state,
      co_mekanik: action.value,
    };
  }

  return state;
};
