// import Axios from 'axios';
import Axios from 'axios';
import {getData, showMessage} from '../../utils';
import {setLoading} from './global';

const API_HOST = {
  url: 'https://nagamas.kazuhaproject.com/api/v1',
};

export const getCartData = () => dispatch => {
  getData('userProfile').then(resProfile => {
    getData('token').then(resToken => {
      Axios.get(
        `${API_HOST.url}/cart-product/filter?user_id=${resProfile.id}`,
        {
          headers: {
            Authorization: resToken.value,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      )
        .then(res => {
          dispatch({type: 'SET_CART', value: res.data.data.data});
        })
        .catch(err => {
          console.log('error mengambil data keranjang:', err);
        });
    });
  });
};

export const cartAction = (data, navigation) => dispatch => {
  dispatch(setLoading(true));
  getData('token').then(resToken => {
    Axios.post(`${API_HOST.url}/cart-product`, data, {
      headers: {
        Authorization: resToken.value,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        dispatch(setLoading(false));
        dispatch({type: 'ADD_TO_CART', value: res.data});
        navigation.navigate('Keranjang');
        showMessage('Berhasil di tambahkan ke keranjang', 'success');
      })
      .catch(err => {
        dispatch(setLoading(false));
        console.log('error menambah ke keranjang:', err);
      });
  });
};
// https://nagamas.kazuhaproject.com/api/v1/cart-product/24

export const deleteCartAction = productId => dispatch => {
  dispatch(setLoading(true));
  getData('token').then(resToken => {
    Axios.delete(`${API_HOST.url}/cart-product/${productId}`, {
      headers: {
        Authorization: resToken.value,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        dispatch(setLoading(false));
        dispatch({type: 'REMOVE_FROM_CART', value: res.data});
        showMessage('Berhasil di hapus dari keranjang', 'success');
      })
      .catch(err => {
        dispatch(setLoading(false));
        console.log('error delete produk:', err);
      });
  });
};

export const refreshCart = () => {
  return {type: 'REFRESH_CART'};
};
