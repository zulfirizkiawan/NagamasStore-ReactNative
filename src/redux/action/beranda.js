import Axios from 'axios';
import {getData} from '../../utils';
import {getCartData, refreshCart} from './cart';

const API_HOST = {
  url: 'https://nagamas.kazuhaproject.com/api/v1',
};

export const getProductData = () => dispatch => {
  getData('token').then(resToken => {
    Axios.get(`${API_HOST.url}/product`, {
      headers: {
        Authorization: resToken.value,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        dispatch({type: 'SET_PRODUCT', value: res.data.data.products});
      })
      .catch(err => {
        console.log('error produk:', err);
      });
  });
};

export const goCartAction = navigation => dispatch => {
  dispatch({type: 'GO_KERANJANG'});
  navigation.navigate('Keranjang');
  dispatch(refreshCart());
  dispatch(getCartData());
};
