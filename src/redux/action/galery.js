import Axios from 'axios';
import {getData} from '../../utils';

const API_HOST = {
  url: 'https://nagamas.kazuhaproject.com/api/v1',
};

export const getGaleryData = () => dispatch => {
  getData('token').then(resToken => {
    Axios.get(`${API_HOST.url}/gallery`, {
      headers: {
        Authorization: resToken.value,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        console.log('res galery:', res.data.data.galleries);
        dispatch({type: 'SET_GALERY', value: res.data.data.galleries});
      })
      .catch(err => {
        console.log('err :', err);
      });
  });
};
