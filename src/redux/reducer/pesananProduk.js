const initPesananProduk = {
  pendingProduk: [],
  prosesProduk: [],
  kirimProduk: [],
  selesaiProduk: [],
  batalProduk: [],
};

export const pesananProdukReducer = (state = initPesananProduk, action) => {
  if (action.type === 'SET_PENDING_PRODUK') {
    return {
      ...state,
      pendingProduk: action.value,
    };
  }
  if (action.type === 'SET_PROSES_PRODUK') {
    return {
      ...state,
      prosesProduk: action.value,
    };
  }
  if (action.type === 'SET_KIRIM_PRODUK') {
    return {
      ...state,
      kirimProduk: action.value,
    };
  }
  if (action.type === 'SET_SELESAI_PRODUK') {
    return {
      ...state,
      selesaiProduk: action.value,
    };
  }
  if (action.type === 'SET_BATAL_PRODUK') {
    return {
      ...state,
      batalProduk: action.value,
    };
  }

  return state;
};
