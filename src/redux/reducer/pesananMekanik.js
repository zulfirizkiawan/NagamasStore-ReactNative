const initPesananMekanik = {
  pendingMekanik: [],
  prosesMekanik: [],
  selesaiMekanik: [],
  batalMekanik: [],
};

export const pesananMekanikReducer = (state = initPesananMekanik, action) => {
  if (action.type === 'SET_PENDING_MEKANIK') {
    return {
      ...state,
      pendingMekanik: action.value,
    };
  }
  if (action.type === 'SET_PROSES_MEKANIK') {
    return {
      ...state,
      prosesMekanik: action.value,
    };
  }
  if (action.type === 'SET_SELESAI_MEKANIK') {
    return {
      ...state,
      selesaiMekanik: action.value,
    };
  }
  if (action.type === 'SET_BATAL_MEKANIK') {
    return {
      ...state,
      batalMekanik: action.value,
    };
  }

  return state;
};
