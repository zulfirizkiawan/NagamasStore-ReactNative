import Axios from 'axios';
import {getData, showMessage} from '../../utils';
import {setLoading} from './global';

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
        dispatch({type: 'SET_MEKANIK', value: res.data.data.mechanics});
      })
      .catch(err => {
        console.log('err ambil data mekanik:', err);
      });
  });
};

export const coMekanikData = (formdata, navigation) => dispatch => {
  dispatch(setLoading(true));
  getData('token').then(resToken => {
    fetch(`${API_HOST.url}/mechanic-transaction-co`, {
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
        dispatch(setLoading(false));
        if (res.data && res.data.transaction.mechanic_id === 0) {
          showMessage('Mekanik tidak tersedia');
        } else {
          dispatch({type: 'CO_MEKANIK', value: res.data});
          navigation.reset({index: 0, routes: [{name: 'Berhasil'}]});
          showMessage('Berhasil sewa mekanik', 'success');
        }
      })
      .catch(err => {
        dispatch(setLoading(false));
        showMessage('Mekanik tidak tersedia');
      });
  });
};
