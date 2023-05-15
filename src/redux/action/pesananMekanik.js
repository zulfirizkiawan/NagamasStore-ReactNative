import Axios from 'axios';
import {getData, showMessage} from '../../utils';
import {setLoading} from './global';

const API_HOST = {
  url: 'https://nagamas.kazuhaproject.com/api/v1',
};

export const getPendingMekanik = () => dispatch => {
  getData('userProfile').then(resProfile => {
    getData('token').then(resToken => {
      Axios.get(
        `${API_HOST.url}/mechanic-transaction?user_id=${resProfile.id}`,
        {
          headers: {
            Authorization: resToken.value,
            Accept: 'application/json',
          },
        },
      )
        .then(res => {
          console.log('berhasil', res.data.data.data);
          dispatch({type: 'SET_PENDING_MEKANIK', value: res.data.data.data});
        })
        .catch(err => {
          console.log('error mengambil data mekanik', err);
        });
    });
  });
};

export const getProsesMekanik = () => dispatch => {
  getData('userProfile').then(resProfile => {
    getData('token').then(resToken => {
      Axios.get(
        `${API_HOST.url}/mechanic-transaction?user_id=${resProfile.id}`,
        {
          headers: {
            Authorization: resToken.value,
            Accept: 'application/json',
          },
        },
      )
        .then(res => {
          console.log('berhasil', res.data.data.data);
          dispatch({type: 'SET_PROSES_MEKANIK', value: res.data.data.data});
        })
        .catch(err => {
          console.log('error mengambil data mekanik', err);
        });
    });
  });
};

export const getSelesaiMekanik = () => dispatch => {
  getData('userProfile').then(resProfile => {
    getData('token').then(resToken => {
      Axios.get(
        `${API_HOST.url}/mechanic-transaction?user_id=${resProfile.id}`,
        {
          headers: {
            Authorization: resToken.value,
            Accept: 'application/json',
          },
        },
      )
        .then(res => {
          console.log('berhasil', res.data.data.data);
          dispatch({type: 'SET_SELESAI_MEKANIK', value: res.data.data.data});
        })
        .catch(err => {
          console.log('error mengambil data mekanik', err);
        });
    });
  });
};

export const getBatalMekanik = () => dispatch => {
  getData('userProfile').then(resProfile => {
    getData('token').then(resToken => {
      Axios.get(
        `${API_HOST.url}/mechanic-transaction?user_id=${resProfile.id}`,
        {
          headers: {
            Authorization: resToken.value,
            Accept: 'application/json',
          },
        },
      )
        .then(res => {
          console.log('berhasil', res.data.data.data);
          dispatch({type: 'SET_BATAL_MEKANIK', value: res.data.data.data});
        })
        .catch(err => {
          console.log('error mengambil data mekanik', err);
        });
    });
  });
};
