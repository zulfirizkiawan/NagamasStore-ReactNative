import Axios from 'axios';
import {getData, showMessage} from '../../utils';
import {setLoading} from './global';

const API_HOST = {
  url: 'https://nagamas.kazuhaproject.com/api/v1',
};

// https://nagamas.kazuhaproject.com/api/v1/product-transaction-co

export const coProdukData = (formdata, navigation) => dispatch => {
  dispatch(setLoading(true));
  getData('token').then(resToken => {
    fetch(`${API_HOST.url}/product-transaction-co`, {
      method: 'POST',
      headers: {
        Authorization: resToken.value,
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: formdata,
    })
      .then(response => response.json())
      .then(res => {
        console.log('res produk CO', res);
        dispatch(setLoading(false));
        dispatch({type: 'CO_PRODUK', value: res.data});
        navigation.reset({index: 0, routes: [{name: 'Berhasil'}]});
        showMessage('Berhasil Melakukan Pemesanan', 'success');
      })
      .catch(err => {
        console.log('err produk CO', err);
        dispatch(setLoading(false));
        showMessage('Produk tidak tersedia');
      });
  });
};
