const initMekanik = {
  mekanik: [],
};

export const mekanikReducer = (state = initMekanik, action) => {
  if (action.type === 'SET_MEKANIK') {
    return {
      ...state,
      mekanik: action.value,
    };
  }

  return state;
};
