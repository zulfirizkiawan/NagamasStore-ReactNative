import Axios from 'axios';
import {getData} from '../../utils';

const API_HOST = {
  url: 'https://nagamas.kazuhaproject.com/api/v1',
};

export const getMekanikData = () => dispatch => {
  getData('token').then(resToken => {
    Axios.get(`${API_HOST.url}/mechanic`, {
      headers: {
        Authorization: resToken.value,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        // console.log('res mechanics:', res.data.data.mechanics);
        dispatch({type: 'SET_MEKANIK', value: res.data.data.mechanics});
      })
      .catch(err => {
        console.log('err :', err);
      });
  });
};
