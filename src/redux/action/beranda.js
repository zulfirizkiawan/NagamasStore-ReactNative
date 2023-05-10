import Axios from 'axios';
import {getData} from '../../utils';

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
        // console.log('res product:', res.data.data.products);
        dispatch({type: 'SET_PRODUCT', value: res.data.data.products});
      })
      .catch(err => {
        console.log('error:', err);
      });
  });
};
