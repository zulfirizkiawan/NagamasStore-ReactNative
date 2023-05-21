const initProduk = {
  co_produk: [],
};

export const produkReducer = (state = initProduk, action) => {
  if (action.type === 'CO_PRODUK') {
    return {
      ...state,
      co_produk: action.value,
    };
  }

  return state;
};
